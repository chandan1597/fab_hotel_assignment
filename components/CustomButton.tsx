import { StyleSheet, Text, View, Pressable, GestureResponderEvent } from "react-native";
import React from "react";

const CustomButton = ({ title, onClick }: { title: string, onPress: any}) => {
  return (
      <Pressable style={styles.container} onPress={onClick}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b72f3",
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
