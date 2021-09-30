import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import Colors from "./constatnts/Colors";

export default function App() {
  return (
    <View style={styles.index}>
      <Header name="Guess The Number ?" />
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    height: "100%",
  },
});
