import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../utils/ThemeManager";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 1000,
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
