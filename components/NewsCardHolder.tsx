import { StyleSheet, Text, View, useWindowDimensions, Image, Pressable} from 'react-native'
import React from 'react'
import Logo from "../assets/images/logo.png";
const NewsCardHolder = ({imageSource, news_article }) => {
    const { height } = useWindowDimensions();
    // console.log({imageSource, news_article, onLike, ifLiked})
  return (
    <View style={[styles.container, {height: 0.2*height}]}>
      <Image source={imageSource} style={styles.newsCardImage}/> 
      <Text style={styles.newsCardText} numberOfLines={9}>{news_article}</Text>
      
    </View>
  )
}

export default NewsCardHolder

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        flexDirection: "row", 
        alignItems: "flex-start",
        borderColor: "#f4f4f4", 
        // borderWidth: 1, 
        borderRadius: 5, 
        width: "100%", 
        marginTop: 5,
        position: "relative",
        borderRightWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1, 
    },
    newsCardImage: {
        width: "40%", 
        height: "100%",
        resizeMode: "contain",
    },
    newsCardText: {
        paddingHorizontal: 5,
        flex: 1,
        flexWrap: "wrap",
        overflow:"hidden",
    },
    
})