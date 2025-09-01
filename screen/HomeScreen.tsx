import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { Plus, ArrowUpRight } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { PUBLIC_URL } from "../config";

export default function HomeScreen() {
  const avatarMap: Record<string, any> = {
    "avatar_1.png": require("../assets/avatar/avatar_1.png"),
    "avatar_2.png": require("../assets/avatar/avatar_2.png"),
    "avatar_3.png": require("../assets/avatar/avatar_3.png"),
    "avatar_4.png": require("../assets/avatar/avatar_4.png"),
    "avatar_5.png": require("../assets/avatar/avatar_5.png"),
    "avatar_6.png": require("../assets/avatar/avatar_6.png"),
    "avatar_7.png": require("../assets/avatar/avatar_7.png"),
    "avatar_8.png": require("../assets/avatar/avatar_8.png"),
    "avatar_9.png": require("../assets/avatar/avatar_9.png"),
    "avatar_10.png": require("../assets/avatar/avatar_10.png"),
    "avatar_11.png": require("../assets/avatar/avatar_11.png"),
    "avatar_12.png": require("../assets/avatar/avatar_12.png"),
  };

  const getAvatarSource = (avatar?: string) => {
    if (!avatar) return require("../assets/avatar/avatar.png");

    if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
      return { uri: avatar };
    }

    return avatarMap[avatar] || require("../assets/avatar/avatar.png");
  };

  const navigation = useNavigation();

  const [user, setUser] = useState<{
    email: string;
    avatar: string;
    links: Array<{
      id: string;
      title: string;
      description: string;
      url: string;
    }>;
  } | null>(null);

  const fetchUser = async () => {
    const email = await AsyncStorage.getItem("userEmail");
    if (!email) return;
    try {
      const response = await fetch(`${PUBLIC_URL}/Linkly/UserDetails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setUser(data);
    } catch (e) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "User not Found!",
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>My Links</Text>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate("Account" as never)}
            >
              <Image
                source={getAvatarSource(user?.avatar)}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          style={{ width: "100%" }}
          data={user?.links || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.linkCard}
              activeOpacity={0.9}
              onPress={() => {
                console.log("Link pressed:", item.url);
                navigation.navigate("PreviewLink" as never);
              }}
              onLongPress={() => {
                Dialog.show({
                  type: ALERT_TYPE.WARNING,
                  title: "Delete Link",
                  textBody: "Are you sure you want to delete this link?",
                  button: "Yes",
                  onPressButton: async () => {
                    try {
                      const response = await fetch(
                        `${PUBLIC_URL}/Linkly/DeleteLink`,
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ id: item.id }),
                        }
                      );

                      const data = await response.json();
                      if (data.status) {
                        Dialog.show({
                          type: ALERT_TYPE.SUCCESS,
                          title: "Deleted",
                          textBody: "Link delete Successful!",
                        });
                        setTimeout(() => {
                          Dialog.hide();
                          fetchUser(); 
                        }, 2000);
                      } else {
                        Dialog.show({
                          type: ALERT_TYPE.DANGER,
                          title: "Error",
                          textBody: "Link delete failed!",
                        });
                      }
                    } catch (e) {
                      Dialog.show({
                        type: ALERT_TYPE.DANGER,
                        title: "Error",
                        textBody: "Network error!",
                      });
                    }
                  },
                });
              }}
            >
              <View style={styles.linkContent}>
                <Image
                  source={require("../assets/link.png")}
                  style={styles.linkImage}
                />
                <View style={styles.linkInfo}>
                  <Text style={styles.linkTitle}>{item.title}</Text>
                  <Text style={styles.linkUrl} numberOfLines={1}>
                    {item.url}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.goButton}
                  onPress={() => Linking.openURL(item.url)}
                >
                  <ArrowUpRight size={22} color="#667eea" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={styles.floatingButtonContainer}
          onPress={() => navigation.navigate("AddLink" as never)}
        >
          <LinearGradient
            colors={["#00C6FF", "#0072FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.floatingButton}
          >
            <Plus size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#ffffff",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  linksList: {
    padding: 20,
  },
  linkCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  linkContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 16,
  },
  linkImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  linkInfo: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  linkDescription: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  linkUrl: {
    fontSize: 12,
    color: "#667eea",
    fontWeight: "500",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: "center",
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 30,
    shadowColor: "#667eea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  goButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
