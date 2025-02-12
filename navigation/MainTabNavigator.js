import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import NutritionScreen from "../screens/NutritionScreen";
import ProgressScreen from "../screens/ProgressScreen";
import ChatScreen from "../screens/ChatScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />
      }} />
      <Tab.Screen name="Workout" component={WorkoutScreen} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dumbbell" size={24} color={color} />
      }} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-apple" size={24} color={color} />
      }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-line" size={24} color={color} />
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-text" size={24} color={color} />
      }} />
    </Tab.Navigator>
  );
}
