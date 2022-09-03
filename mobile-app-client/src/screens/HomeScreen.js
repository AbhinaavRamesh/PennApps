import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { foodData } from "../data/dummyData"
import FoodBrowserCard from "../components/FoodBrowserCard"
import { LinearGradient } from "expo-linear-gradient"
// pass in parent  horizontal={true} if vertical
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FFFFFF", "#FFEAB4"]}>
        <FlatList
          data={foodData}
          renderItem={({ item }) => (
            <View styles={styles.list}>
              <FoodBrowserCard food={item}></FoodBrowserCard>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </LinearGradient>
    </View>
  )
}
var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: "100%",
  },
  list: {
    paddingTop: 10,
    paddingLeft: 8,
  },
})
export default HomeScreen
