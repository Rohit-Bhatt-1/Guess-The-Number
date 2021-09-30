import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import Colors from "./constatnts/Colors";

export default function App() {
  const [myNumber, setMyNumber] = useState(" ");

  const handleNumberChange = (num) => {
    if (num.length < 2) {
      setMyNumber(" ");
    }
    let last = num[num.length - 1];
    if (!(last <= 9 && last >= 0 && last != " ")) return;
    setMyNumber(num);
  };

  const clear = () => {
    setMyNumber(" ");
  };

  return (
    <View style={styles.index}>
      <Header name="Guess The Number ?" />
      <StartScreen
        handleNumberChange={handleNumberChange}
        myNumber={myNumber}
        clear={clear}
      />
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
