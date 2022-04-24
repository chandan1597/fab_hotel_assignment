import {
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NewsCardHolder from "../components/NewsCardHolder";
import React, { useState } from "react";
import data from "../data.json";

export default function TabOneScreen(props) {
  const { height } = useWindowDimensions();
  const [state, setState] = useState(data.posts);
  const renderItem = ({ item, index }) => {
    const heartClicked = () => {
      console.log("heart Clicked");
      setState((prevState) => {
        return prevState.map((v, i) => {
          if (i === index) {
            console.log({ i, index });
            v.ifLiked = !v.ifLiked;
          }
          return v;
        });
      });
    };
    return (
      <>
        <Pressable
          onPress={() => {
            props.navigation.push("DetailsScreen", {
              imageSource: { uri: item.imageSource },
              news_article: item.text,
              ifLiked: item.ifLiked,
              heartClicked,
            });
          }}
        >
          <NewsCardHolder
            imageSource={{ uri: item.imageSource }}
            news_article={item.text}
            ifLiked={item.ifLiked}
          />
        </Pressable>
        <View style={styles.newsCardLike}>
          <Pressable onPress={heartClicked}>
            <Feather
              name="heart"
              size={24}
              color={item.ifLiked ? "red" : "black"}
            />
          </Pressable>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.border}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
  border: {
    width: "100%",
  },
  newsCardLike: {
    flex: 1,
    alignItems: "flex-end",
    borderColor: "#f4f4f4",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 5,
  },
});
