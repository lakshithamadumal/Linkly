import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ArrowLeft, LogOut, Save } from "lucide-react-native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const Account = [
    {
      Name: "Lakshitha Madumal",
      Email: "mandujayaweera2003@gmail.com",
      Avatar: require("../assets/avatar/avatar_1.png"),
    },
  ];

  const user = Account[0];
  const navigation = useNavigation();

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home" as never)}
          >
            <ArrowLeft size={24} color="#1a1a2e" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account</Text>
          <TouchableOpacity style={styles.saveButton}>
            <Save size={20} color="#ffffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image source={user.Avatar} style={styles.profileImage} />
          <Text style={styles.profileName}>{user.Name}</Text>
          <Text style={styles.profileEmail}>{user.Email}</Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            Dialog.show({
              type: ALERT_TYPE.WARNING,
              title: "Confirm Logout",
              textBody: "Are you sure you want to logout?",
              button: "Yes",
              onPressButton: () => {
                Dialog.show({
                  type: ALERT_TYPE.SUCCESS,
                  title: "Success",
                  textBody: "Logout Successful!",
                });
                setTimeout(() => {
                  Dialog.hide();
                  console.log("User confirmed Logout");
                  navigation.navigate("Login" as never);
                }, 2000);
              },
            });
          }}
        >
          <LogOut size={20} color="#ffffff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  backButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#667eea",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: "#64748b",
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ef4444",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 40,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a2e",
  },
  saveButton: {
    padding: 8,
  },
});
