import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import Colors from "./utils/ThemeManager.ts";
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

// sonar-scanner.bat -D"sonar.projectKey=Guess-Number" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=622198bb7feb356777a9eab9059276a25265f39f"
