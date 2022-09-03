import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { colors, parameters } from "../global/styles"
import { Icon } from "@rneui/base"

export default function Footer({ title }) {
  return <View style={styles.Footer}></View>
}

const styles = StyleSheet.create({
  Footer: {
    flexDirection: "row",
    // height: parameters.FooterHeight,
  },

  FooterText: {
    // color: colors.FooterText,
    // fontSize: 22,
    // fontWeight: "bold",
    // marginLeft: 30,
    // marginTop: 5,
  },
})
