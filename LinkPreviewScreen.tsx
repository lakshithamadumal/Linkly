import React from "react";
import { View, Linking, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  ArrowLeft,
  Copy,
} from "lucide-react-native";

export default function LinkPreviewScreen() {
  const mockLinks = [
    {
      id: "1",
      title: "Portfolio",
      description: "My coding projects and repositories",
      url: "https://iamlaky.online/",
      image: require("./assets/link.png"),
    },
  ];

  const link = mockLinks[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Link Preview</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerAction}>
            <Copy size={20} color="#ffffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {link.image && (
          <View style={styles.imageContainer}>
            <Image source={link.image} style={styles.linkImage} />
          </View>
        )}

        <View style={styles.linkDetails}>
          <Text style={styles.linkTitle}>{link.title}</Text>

          {link.description && (
            <Text style={styles.linkDescription}>{link.description}</Text>
          )}

          <TouchableOpacity onPress={() => Linking.openURL(link.url)}>
            <Text style={styles.linkUrl}>{link.url}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a2e",
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  linkImage: {
    width: 200,
    height: 200,
    borderRadius: 16,
    backgroundColor: "#f1f5f9",
  },
  linkDetails: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  linkTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 12,
  },
  linkDescription: {
    fontSize: 16,
    color: "#64748b",
    lineHeight: 24,
    marginBottom: 16,
  },
  linkUrl: {
    fontSize: 14,
    color: "#667eea",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
