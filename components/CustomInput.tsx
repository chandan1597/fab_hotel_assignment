import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}: {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "white",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
