import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Entypo";

const MetricsWidget = ({ iconName, metric, metricName }) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderRadius: 10,
        width: 150,
        height: 150,
        marginHorizontal: 20,
      }}
    >
      <View style={{ margin: 10 }}>
        {metricName === "power" ? (
          <Icon name={iconName} size={27} color="grey"></Icon>
        ) : (
          <Icon2 name={iconName} size={27} color="grey"></Icon2>
        )}
      </View>

      <View style={{ paddingLeft: 40, paddingTop: 30 }}>
        {metricName === "power" ? (
          <Text style={styles.metric}>{metric}W</Text>
        ) : (
          <Text style={styles.metric}>${metric}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metric: {
    fontWeight: "bold",
    fontSize: 48,
  },
});

export default MetricsWidget;
