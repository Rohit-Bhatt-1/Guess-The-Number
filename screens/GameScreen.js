import React, { useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import SelectedNumber from "../components/SelectedNumber";

const GameScreen = ({ excludeNumber }) => {
  const min = useRef(0);
  const max = useRef(100);
  const [opponentChoice, setOpponentChoice] = useState(false);

  const goHigher = () => {
    min.current = opponentChoice;
    randomNumberGenerator();
  };

  const goLower = () => {
    max.current = opponentChoice;
    randomNumberGenerator();
  };

  const randomNumberGenerator = () => {
    let temp = Math.random();
    temp = Math.floor(temp * (max.current - min.current));
    temp += min.current;
    if (max.current - min.current < 3) {
      Alert.alert(
        "You Won",
        "Congratulations on giving perfect instructions!!",
        [{ text: "Wohooo!", style: "destructive" }]
      );
      setOpponentChoice(excludeNumber);
      return;
    }
    if (temp === excludeNumber) {
      randomNumberGenerator();
      return;
    }
    setOpponentChoice(temp);
  };
  if (opponentChoice === false) {
    randomNumberGenerator();
  }
  return (
    <View style={styles.container}>
      <Card>
        <Text>Opponent's Choice</Text>
        <SelectedNumber>{opponentChoice}</SelectedNumber>
        <View style={styles.buttons}>
          <Button title="LOWER" onPress={goLower} style={styles.button} />
          <Button title="HIGHER" onPress={goHigher} style={styles.button} />
        </View>
      </Card>
      {console.log(max.current, " ", min.current, " ", opponentChoice)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    height: 1000,
    maxHeight: "90%",
    alignItems: "center",
    marginTop: "15%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: "30%",
  },
});

export default GameScreen;
