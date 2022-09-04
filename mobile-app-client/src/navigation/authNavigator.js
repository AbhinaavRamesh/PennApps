import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import FoodAlternativesScreen from '../screens/FoodAlternativesScreen';
import FridgeInfoScreen from '../screens/FridgeInfoScreen';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";

//Screen names
const homeName = "Items";
const foodAlternativesName = "Market";
const fridgeInfoName = "Analytics";

const Tab = createBottomTabNavigator();

export default function AuthStack() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            return <Icon name="fridge" size={size} color={color} />;
          } else if (rn === foodAlternativesName) {
            return <Icon2 name="analytics" size={size} color={color} />;
          } else if (rn === fridgeInfoName) {
            return <Icon3 name='add-shopping-cart' size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70}
      }}>

      <Tab.Screen options={{headerShown:false}} name={homeName} component={HomeScreen} />
      <Tab.Screen options={{headerShown:false}} name={fridgeInfoName} component={FridgeInfoScreen} />
      <Tab.Screen options={{headerShown:false}} name={foodAlternativesName} component={FoodAlternativesScreen} />

    </Tab.Navigator>
  )
}
