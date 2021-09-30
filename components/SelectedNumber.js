import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constatnts/Colors";

const SelectedNumber = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.selectedNumber}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.primary,
    marginVertical: "5%",
    padding: "1%",
  },
  selectedNumber: {
    fontSize: 40,
    color: Colors.primary,
  },
});

export default SelectedNumber;
