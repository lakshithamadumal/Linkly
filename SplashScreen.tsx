import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login" as never);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <LinearGradient
      colors={["#667eea", "#764ba2", "#f093fb"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.appName}>Linkly</Text>
        <Text style={styles.tagline}>Organize Your Links</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ Laky</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  appName: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "300",
  },
  footer: {
    position: "absolute",
    bottom: 50,
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
  },
});
