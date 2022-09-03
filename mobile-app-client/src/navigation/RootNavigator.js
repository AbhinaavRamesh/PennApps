import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./authNavigator"

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack></AuthStack>
    </NavigationContainer>
  )
}
