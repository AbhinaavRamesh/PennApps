import React from "react"
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack"
import RootScreen from "../screens/RootScreen"
import HomeScreen from "../screens/HomeScreen"
import ViewFoodScreen from "../screens/ViewFoodScreen"
import FridgeInfoScreen from "../screens/FridgeInfoScreen"
import FoodAlternativesScreen from "../screens/FoodAlternativesScreen"

const Auth = createStackNavigator()

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name='RootScreen'
        component={RootScreen}
        option={{
          headerTitleAlign: "center",
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      ></Auth.Screen>
      <Auth.Screen
        name='HomeScreen'
        component={HomeScreen}
        option={{
          headerTitleAlign: "center",
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      ></Auth.Screen>
      <Auth.Screen
        name='ViewFoodScreen'
        component={ViewFoodScreen}
        option={{
          headerTitleAlign: "center",
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      ></Auth.Screen>
      <Auth.Screen
        name='FridgeInfoScreen'
        component={FridgeInfoScreen}
        option={{
          headerTitleAlign: "center",
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      ></Auth.Screen>
      <Auth.Screen
        name='FoodAlternativesScreen'
        component={FoodAlternativesScreen}
        option={{
          headerTitleAlign: "center",
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      ></Auth.Screen>
    </Auth.Navigator>
  )
}
