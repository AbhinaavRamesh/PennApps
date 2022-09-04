import { Icon } from "@rneui/base"
import React from "react"
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native"
import { colors } from "../global/styles"
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const AlternativeFoodCard = ({ food, screenWidth }) => {
  return (
    <View>
      <View style={{ ...styles.cardView, flex:2 }}>
        <Image
          style={{ ...styles.image}}
          source={food.imageUrl}
        ></Image>

      <View >
        <View style={{paddingLeft:20}}>
          <Text style={styles.foodName}>{food.name} alternative</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.carbonView}>
          <Icon2
          style={{ marginLeft: 20, marginTop: 9 }}
          name="molecule-co2"
          size={30}
          color="grey"
        />
         
            <Text style={styles.carbonFootprint}>
              {food.carbonFootprint}g of CO2
            </Text>
          </View>
          <View style={{ flex: 3, marginRight:10, flexDirection: "row" }}>
          <TouchableOpacity
        // onPress={}
        style={{
          width: 100,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 4,
          marginBottom:10,
          borderRadius: 10,
          backgroundColor: 'orange',
        }}>
        <Text>Carbon offset
</Text>
      </TouchableOpacity>
         
          </View>
        </View>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 30,
    // borderTopRightRadius: 5,
    // borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
    
    borderRadius: 5,
    marginBottom: 40,

  },
  image: {
 
    height: 150,
    width:349,
    borderRadius: 5,
    paddingBottom: 20
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
    paddingLeft: 20
  },
  carbonFootprint: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: "grey",
  },
})

export default AlternativeFoodCard
