import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, StatusBar, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });

    const scaleUp = Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });

    Animated.parallel([fadeIn, scaleUp]).start(() => {
      setTimeout(() => {
        router.replace("/(tabs)");
      }, 1500);
    });
  }, [fadeAnim, scaleAnim, router]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoText}>TM</Text>
          </View>
        </View>

        <Text style={styles.appName}>TicketMaster</Text>
        <Text style={styles.tagline}>Seus eventos favoritos</Text>

        <View style={styles.loadingContainer}>
          <View style={styles.loadingBar}>
            <Animated.View
              style={[
                styles.loadingProgress,
                {
                  width: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoBackground: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "800",
    color: "#fff",
  },
  appName: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#666",
    marginBottom: 48,
  },
  loadingContainer: {
    alignItems: "center",
    width: 200,
  },
  loadingBar: {
    width: "100%",
    height: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 12,
  },
  loadingProgress: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 14,
    color: "#999",
  },
});
