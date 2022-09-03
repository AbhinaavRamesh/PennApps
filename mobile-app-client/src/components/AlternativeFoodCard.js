import { Icon } from "@rneui/base"
import React from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"
import { colors } from "../global/styles"
// import {}

const AlternativeFoodCard = ({ food, screenWidth }) => {
  return (
    <View>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          styles={{ ...styles.image, width: screenWidth }}
          source={food.imageUrl}
        ></Image>
      </View>

      <View>
        <View>
          <Text style={styles.foodName}>{food.name} alternative</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.carbonView}>
            <Icon
              name='place'
              type='material'
              color='grey'
              size={18}
              iconStyle={{
                marginTop: 3,
              }}
            ></Icon>
            <Text style={styles.carbonFootprint}>
              {food.carbonFootprint} g of CO2
            </Text>
          </View>
          <View style={{ flex: 9, flexDirection: "row" }}>
            <Button
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                borderRadius: 30,
                backgroundColor: colors.buttonColorSecondary,
              }}
              title='Carbon offset'
            >
              HomeScreen
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },

  foodName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "grey",
    marginTop: 5,
  },

  carbonView: {
    flex: 4,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  carbonFootprint: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: "grey",
  },
})

export default AlternativeFoodCard
