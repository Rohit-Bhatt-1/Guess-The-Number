import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import Colors from "./constatnts/Colors";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [number, setNumber] = useState();

  let content = <StartScreen giveNumberToApp={setNumber} />;

  if (number) content = <GameScreen excludeNumber={number} />;
  return (
    <View style={styles.index}>
      <Header name="Guess The Number ?" />
      {content}
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
