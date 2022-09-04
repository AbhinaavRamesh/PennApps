import { Button } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";

const RootScreen = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "yellow",
        height: 70,
        paddingHorizontal: 70,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          color="transparent"
        >
          <Icon name="fridge" size={27} color="black"></Icon>
        </Button>
        <Text style={styles.appbarText}>Items</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("FoodAlternativesScreen");
          }}
          color="transparent"
        >
          <Icon2 name="analytics" size={27} color="black"></Icon2>
        </Button>
        <Text style={styles.appbarText}>Analytics</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ paddingHorizontal: 20, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("FridgeInfoScreen");
          }}
          color="transparent"

        >
          <Icon3 name="add-shopping-cart" size={27} color="black"></Icon3>
        </Button>
        <Text style={styles.appbarText}>Market</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbarText: {
    fontSize: 12,
  },
});

export default RootScreen;
