import React from "react";
import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";
import Card from "../components/Card";
import Colors from "../constatnts/Colors";

const StartScreen = ({ handleNumberChange, myNumber, clear }) => {
  return (
    <View style={styles.firstScreen}>
      <Card style={styles.takeInput}>
        <View style={styles.inputNumber}>
          <TextInput
            onChangeText={handleNumberChange}
            placeholder="Enter a Number"
            value={myNumber}
            style={styles.textInputNumber}
            keyboardType="numeric"
            maxLength={3}
            autoFocus={true}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Let's Go" color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} onPress={clear} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  firstScreen: {
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
    marginTop: "30%",
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
});

export default StartScreen;
