import React, { useContext } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

// SCREENS
import Home from "../screens/Home";
import Epi from "../screens/Epi";
import Equipamento from "../screens/Equipamento";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

const AppTabs = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          // backgroundColor: "#171626",
        },
      }}
    >
      <AppTabs.Screen
        name="Epi"
        component={Epi}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialIcon
                  name="safety-goggles"
                  size={size}
                  color={color}
                />
              )
            } else {
              return (
                <MaterialIcon
                  name="safety-goggles"
                  size={size}
                  color={color}
                />
              )
            }
          }
        }}
      />
      <AppTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View className="bg-primary w-12 h-12">
                  <Ionicons
                    name="document-text"
                    size={size}
                    color={color}
                  />
                </View>
              )
            } else {
              <Ionicons
                name="document-text"
                size={size}
                color={color}
              />

            }
          }
        }}
      />
      <AppTabs.Screen name="Equipamento" component={Equipamento} />
    </AppTabs.Navigator>
  )
}

export default AppRoutes