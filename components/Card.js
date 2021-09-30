import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constatnts/Colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "90%",
    maxWidth: "90%",
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.cardBackground,
    borderRadius: 50,
    elevation: 8,
  },
});
export default Card;
