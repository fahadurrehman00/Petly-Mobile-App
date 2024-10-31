import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../constants/Colors";
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.Primary }}>
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='favorite'
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name='like2' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          headerShown: false,
          title: "Inbox",

          tabBarIcon: ({ color }) => (
            <AntDesign name='message1' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
