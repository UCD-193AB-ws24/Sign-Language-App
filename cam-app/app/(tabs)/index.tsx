import { Image, StyleSheet, Platform, Button } from "react-native";

//import { SpeechToText } from "@/components/SpeechToText";
//import {StaticTextToSpeech} from "@/components/StaticTextToSpeech";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/american.png")}
          style={styles.landingLogo}
          resizeMode="contain"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hey there!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.welcomeText}>
          Welcome to our ASL Detection & Translation App
        </ThemedText>
        <ThemedText style={styles.instructionText}>
          To get started, head over to the camera tab and enable permissions!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 16,
    marginBottom: 16,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  landingLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "static",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 0.5,
    marginVertical: 12,
  },
  instructionText: {
    textAlign: "center",
    opacity: 0.9,
  },
  fullScreenImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
