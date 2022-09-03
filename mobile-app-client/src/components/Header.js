import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { colors, parameters } from "../global/styles"
import { Icon } from "@rneui/base"

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20, marginTop: 5 }}>
        <Icon
          type='material-community'
          name='arrow-left'
          size={28}
          onPress={() => {}}
        ></Icon>
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: parameters.headerHeight,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 5,
  },
})
