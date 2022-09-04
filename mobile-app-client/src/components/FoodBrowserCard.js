import React from "react"
import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import { colors } from "../global/styles"
import { useNavigation } from "@react-navigation/native"

const FoodBrowserCard = ({ food }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("Items", 
    {screen: "ViewFoodScreen", params: {food:food}}
    )}>
      <View style={styles.container}>
        <Image
          style={{ height: 70, width: 120, borderRadius: 30 }}
          source={{uri:food.imageUrl}}
        ></Image>
        <View>
          <Text style={colors.cardText}>{food.name}</Text>
        </View>
        <View>
          <Text>
            {food.units} units | {food.daysUntilExpiry} days
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    paddingTop: 10,
    margin: 10,
    width: 130,
    height: 120,
    flex: 1,
    flexDirection: "column",
    margin: 1,
  },

  cardText: {
    fontWeight: "bold",
  },
})

export default FoodBrowserCard
