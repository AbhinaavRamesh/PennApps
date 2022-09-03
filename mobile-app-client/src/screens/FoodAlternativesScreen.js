import React from "react"
import { View, Text, FlatList, Dimensions } from "react-native"
import { alternativeFoodData } from "../data/dummyData"
import AlternativeFoodCard from "../components/AlternativeFoodCard"

const SCREEN_WIDTH = Dimensions.get("window").width
const AlternativeFoodBrowser = () => {
  return (
    <View>
      <FlatList
        style={{
          marginTop: 30,
          marginBottom: 10,
        }}
        data={alternativeFoodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <AlternativeFoodCard
              screenWidth={SCREEN_WIDTH}
              food={item}
            ></AlternativeFoodCard>
          </View>
        )}
      ></FlatList>
    </View>
  )
}

export default AlternativeFoodBrowser
