import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";

import { fridgeDummyData } from "../data/dummyData";
import Icon from "react-native-vector-icons/FontAwesome";
import MetricsWidget from "../components/MetricsWidget";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const FridgeInfoScreen = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 180,
            width: 270,
            borderWidth: 2,
            alignItems: "center",
            margin: 30,
            borderRadius: 20,
          }}
        >
          <View></View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <MetricsWidget
          iconName={"receipt"}
          metric={fridgeDummyData["power"]}
          metricName="power"
        ></MetricsWidget>
        <MetricsWidget
          iconName={"power-plug"}
          metric={fridgeDummyData["cost"]}
          metricName="cost"
        ></MetricsWidget>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 180,
            width: 270,
            borderWidth: 2,
            alignItems: "center",
            margin: 30,
            borderRadius: 20,
          }}
        ></View>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: "100%",
  },
  list: {
    paddingTop: 10,
    paddingLeft: 8,
  },
});

export default FridgeInfoScreen;
