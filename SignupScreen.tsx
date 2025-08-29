import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Mail, Lock, User } from "lucide-react-native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const avatarImages = [
  require("./assets/avatar/avatar_1.png"),
  require("./assets/avatar/avatar_2.png"),
  require("./assets/avatar/avatar_3.png"),
  require("./assets/avatar/avatar_4.png"),
  require("./assets/avatar/avatar_5.png"),
  require("./assets/avatar/avatar_6.png"),
  require("./assets/avatar/avatar_7.png"),
  require("./assets/avatar/avatar_8.png"),
  require("./assets/avatar/avatar_9.png"),
  require("./assets/avatar/avatar_10.png"),
  require("./assets/avatar/avatar_11.png"),
  require("./assets/avatar/avatar_12.png"),
];

export default function SignupScreen() {
  const [selectedAvatar, setSelectedAvatar] = useState(
    avatarImages[Math.floor(Math.random() * avatarImages.length)]
  );

  const selectRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    setSelectedAvatar(avatarImages[randomIndex]);
  };

  return (
    <AlertNotificationRoot>
      <LinearGradient colors={["#667eea", "#764ba2"]} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join Linkly today</Text>
            </View>

            <View style={styles.avatarSection}>
              <Image source={selectedAvatar} style={styles.avatar} />
              <TouchableOpacity
                style={styles.changeAvatarButton}
                onPress={selectRandomAvatar}
              >
                <Text style={styles.changeAvatarText}>Change Avatar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <User size={20} color="#667eea" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.inputContainer}>
                <Mail size={20} color="#667eea" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.inputContainer}>
                <Lock size={20} color="#667eea" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                />
              </View>

              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => {
                  Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: "Success",
                    textBody: "Registation Successful!",
                  });

                  setTimeout(() => {
                    Dialog.hide();
                    console.log("User confirmed registeration");
                  }, 2000);
                }}
              >
                <Text style={styles.signupButtonText}>Create Account</Text>
              </TouchableOpacity>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  changeAvatarButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  changeAvatarText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  signupButton: {
    backgroundColor: "#667eea",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#667eea",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  signupButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  footerText: {
    color: "#666",
    fontSize: 16,
  },
  linkText: {
    color: "#667eea",
    fontSize: 16,
    fontWeight: "600",
  },
});
