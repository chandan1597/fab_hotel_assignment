import {
    StyleSheet,
    Image,
    View,
    useWindowDimensions,
  } from "react-native";
  import CustomInput from "../components/CustomInput";
  import CustomButton from "../components/CustomButton";
  import Logo from "../assets/images/logo.png";
  import React, { useState } from "react";
  import data from "../data.json"
  export default function SignInScreen(props) {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const verifyUser = () => {
      if(!data.users[username]){
        return
      }
      else if(data.users[username] === password) {
        props.navigation.push("DashboardScreen");
        return
      }
    }
    return (
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <View style={styles.loginForm}>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomButton title="Sign In" onClick={verifyUser}/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "white",
      alignItems: "center",
      padding: 20,
    },
    loginForm:{
      width: "100%", 
      flex: 1,
      justifyContent: "center"
    },
    logo: {
      width: "70%",
      maxWidth: 300,
      maxHeight: 200,
    },
  });
  