import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import {
  ArrowLeft,
  Save,
  Link,
  Type,
  FileText,
  Image as ImageIcon,
} from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

export default function AddLinkScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pickedImage, setPickedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#1a1a2e" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Link</Text>
          <TouchableOpacity style={styles.saveButton}>
            <Save size={20} color="#ffffffff" />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.inputSection}>
              <View style={styles.inputHeader}>
                <Type size={20} color="#667eea" />
                <Text style={styles.inputLabel}>Title *</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter link title"
                placeholderTextColor="#999"
                value={title}
                onChangeText={setTitle}
                maxLength={100}
              />
            </View>

            <View style={styles.inputSection}>
              <View style={styles.inputHeader}>
                <FileText size={20} color="#667eea" />
                <Text style={styles.inputLabel}>Description (Optional)</Text>
              </View>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter description"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                maxLength={500}
              />
            </View>

            <View style={styles.inputSection}>
              <View style={styles.inputHeader}>
                <Link size={20} color="#667eea" />
                <Text style={styles.inputLabel}>URL *</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="https://example.com"
                placeholderTextColor="#999"
                value={url}
                onChangeText={setUrl}
                keyboardType="url"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputSection}>
              <View style={styles.inputHeader}>
                <ImageIcon size={20} color="#667eea" />
                <Text style={styles.inputLabel}>Image (Optional)</Text>
              </View>
              <TouchableOpacity
                style={styles.imagePickerBox}
                onPress={pickImage}
                activeOpacity={0.7}
              >
                {pickedImage ? (
                  <Image
                    source={{ uri: pickedImage }}
                    style={styles.imagePreview}
                  />
                ) : (
                  <View style={styles.plusIconContainer}>
                    <ImageIcon size={36} color="#b4b4b4" />
                    <Text style={styles.imagePickerText}>Add Image</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.saveButtonLarge}
              onPress={() => {
                Dialog.show({
                  type: ALERT_TYPE.SUCCESS,
                  title: "Success",
                  textBody: "Link saved successfully!",
                });

                setTimeout(() => {
                  Dialog.hide();
                  console.log("link saved!");
                }, 2000);
              }}
            >
              <Text style={styles.saveButtonText}>Save Link</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a2e",
  },
  saveButton: {
    padding: 8,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a2e",
    marginLeft: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButtonLarge: {
    backgroundColor: "#667eea",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
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
    fontSize: 18,
    fontWeight: "600",
  },
  imagePickerBox: {
    width: "100%",
    aspectRatio: 1, // <-- add this for 1:1 box
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#d1d5db",
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 4,
    overflow: "hidden",
  },
  plusIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagePickerText: {
    color: "#b4b4b4",
    fontSize: 15,
    marginTop: 6,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
