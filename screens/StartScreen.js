import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import SelectedNumber from "../components/SelectedNumber";
import Colors from "../utils/ThemeManager";

const StartScreen = ({ giveNumberToApp }) => {
  const [myNumber, setMyNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();

  const numberChangeHandler = (num) => {
    if (num.length === 0) setMyNumber(" ");
    else setMyNumber(num.replace(/\D/g, ""));
  };

  const clearHandler = () => {
    setMyNumber(" ");
    setConfirmed(false);
  };

  const goHandler = () => {
    let temp = parseInt(myNumber);
    Keyboard.dismiss();
    if (isNaN(temp)) {
      Alert.alert("Invalid Number", "Enter a valid number between 1 and 99", [
        { text: "Gotcha", style: "destructive", onPress: clearHandler },
      ]);
      setConfirmed(false);
      setConfirmedNumber("");
      return;
    }
    setConfirmedNumber(temp);
    clearHandler();
    setConfirmed(true);
  };

  const loadGameScreen = () => {
    giveNumberToApp(confirmedNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirming}>
        <View style={styles.confirmTextView}>
          <Text style={styles.confirmText}>Selected Number</Text>
        </View>
        <SelectedNumber>{confirmedNumber}</SelectedNumber>
        <Button
          title="Start Game"
          style={styles.button}
          color={Colors.primary}
          onPress={loadGameScreen}
        />
      </Card>
    );
  } else confirmedOutput = <Text> </Text>;

  return (
    <View style={styles.screen}>
      <Card style={styles.takeInput}>
        <View style={styles.inputNumber}>
          <TextInput
            onChangeText={numberChangeHandler}
            placeholder="Enter a Number"
            value={myNumber}
            style={styles.textInputNumber}
            keyboardType="numeric"
            maxLength={2}
            autoFocus={true}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Let's Go"
              color={Colors.primary}
              onPress={goHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={clearHandler}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  confirmTextView: {
    alignItems: "center",
  },
  confirmText: {
    fontSize: 20,
  },
  screen: {
    flex: 8,
    height: 1000,
    maxHeight: "90%",
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
  takeInput: {
    marginTop: "10%",
    height: "40%",
  },
  inputNumber: {
    width: 1000,
    maxWidth: "90%",
    paddingBottom: "5%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 15,
    marginBottom: "5%",
  },
  textInputNumber: {
    textAlign: "center",
  },
  confirming: {
    marginTop: "15%",
  },
});

export default StartScreen;
