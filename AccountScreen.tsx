import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ArrowLeft, LogOut } from "lucide-react-native";

export default function AccountScreen() {
  const Account = [
    {
      Name: "Lakshitha Madumal",
      Email: "mandujayaweera2003@gmail.com",
      Avatar: require("./assets/avatar/avatar_1.png"), // මෙහෙම වෙනස් කරන්න
    },
  ];

  const user = Account[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#1a1a2e" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={user.Avatar} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.Name}</Text>
        <Text style={styles.profileEmail}>{user.Email}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#ffffff" />
        <Text style={styles.logoutButtonText}>Logout</Text>
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
  detailsSection: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  detailIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a2e",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a2e",
  },
  closeButton: {
    padding: 4,
  },
  modalBody: {
    padding: 20,
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginRight: 8,
  },
  cancelButtonText: {
    color: "#64748b",
    fontSize: 16,
    fontWeight: "600",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#667eea",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    shadowColor: "#667eea",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
