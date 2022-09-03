import { Button } from "@rneui/base"
import React from "react"
import { View, Text } from "react-native"

const RootScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RootScreen</Text>
      <View>
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("HomeScreen")
          }}
        >
          HomeScreen
        </Button>
      </View>
      <View>
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("ViewFoodScreen")
          }}
        >
          ViewFoodScreen
        </Button>
      </View>
      <View>
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("FoodAlternativesScreen")
          }}
        >
          FoodAlternativeScreen
        </Button>
      </View>
      <View>
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("FridgeInfoScreen")
          }}
        >
          FridgeInfoScreen
        </Button>
      </View>
    </View>
  )
}

export default RootScreen
