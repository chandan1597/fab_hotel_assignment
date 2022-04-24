import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import React , {useState} from 'react';
export default function TabTwoScreen(props) {
  const params = props.route.params;
  const [ifLiked, setIfLiked] = useState(params.ifLiked)
  const onHeartClicked = () => {
    setIfLiked(prev => !prev);
    params.heartClicked();
  }
  return (
    <View>
      <View style={styles.flexEnd}>
      <Pressable onPress={onHeartClicked}>
      <Feather
            name="heart"
            size={24}
            color={ifLiked ? "red" : "black"}
            style={styles.heart}
          />
      </Pressable>
      </View>
      
      <Image source={params.imageSource} style={styles.newsCardImage} />
      <Text>{params.news_article}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  newsCardImage: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  flexEnd: {
    alignItems: "flex-end"
  },
  heart:{
    padding: 5
  }
});
