import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Cutlery } from "../../assets/icons/Cutlery.png";
import Icon from "react-native-vector-icons/FontAwesome";

import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const ViewFoodScreen = (food) => {
  return (
    <View style={styles.mainCard}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{ width: 200, height: 150, borderRadius: 20 }}
          source={{
            uri: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11prJK.img?w=534&h=356&m=6",
          }}
        ></Image>
      </View>
      <View style={styles.infoBox}>
        <Icon
          style={{ marginLeft: 20, marginTop: 9 }}
          name="cutlery"
          size={22}
          color="grey"
        />
        <Text>{food.name}</Text>
      </View>
      <View style={styles.infoBox}>
        <Icon
          style={{ marginLeft: 20, marginTop: 9 }}
          name="hashtag"
          size={22}
          color="grey"
        />
        <Text>{food.name}</Text>
      </View>
      <View style={styles.infoBox}>
        <Icon2
          style={{ marginLeft: 20, marginTop: 9 }}
          name="molecule-co2"
          size={30}
          color="grey"
        />
        <Text>{food.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Icon
          style={{ marginLeft: 20, marginTop: 9 }}
          name="calendar-times-o"
          size={25}
          color="grey"
        />
        <Text>{food.name}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          // onPress={}
          style={{
            width: 130,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 4,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "orange",
            marginTop: 30,
          }}
        >
          <Text>Carbon offset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={}
          style={{
            width: 130,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 4,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "orange",
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <Text>Carbon offset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    borderWidth: 2,
    margin: 30,
    borderRadius: 20,
  },
  infoBox: {
    width: 300,
    height: 45,
    borderRadius: 30,
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 20,
  },
});
export default ViewFoodScreen;
