import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Plus, ExternalLink } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const mockLinks = [
  {
    id: "1",
    title: "GitHub",
    description: "My coding projects and repositories",
    url: "https://github.com",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>My Links</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require("./assets/avatar/avatar_1.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={mockLinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.linkCard}>
            <View style={styles.linkContent}>
              {item.image ? (
                <Image source={{ uri: item.image }} style={styles.linkImage} />
              ) : (
                <View style={styles.linkImagePlaceholder}>
                  <ExternalLink size={24} color="#667eea" />
                </View>
              )}
              <View style={styles.linkInfo}>
                <Text style={styles.linkTitle}>{item.title}</Text>
                <Text style={styles.linkDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <Text style={styles.linkUrl} numberOfLines={1}>
                  {item.url}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.floatingButtonContainer}>
        <LinearGradient
          colors={["#667eea", "#764ba2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.floatingButton}
        >
          <Plus size={24} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
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
});
