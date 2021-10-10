import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../utils/ThemeManager";
import Card from "./Card";

const Header = ({ name }) => {
  return (
    <Card style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: Colors.primary,
    paddingTop: 40,
    paddingBottom: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
