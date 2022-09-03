import { Button } from "@rneui/base"
import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import Header from "./src/components/Header"
import { colors, parameters } from "./src/global/styles"
import RootNavigator from "./src/navigation/RootNavigator"
const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigator></RootNavigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App
