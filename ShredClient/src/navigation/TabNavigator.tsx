import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ThemeContext from "../context/ThemeContext";
import { StyleSheet, Text, View } from "react-native";

type TabNavigatorParamsList = {
  WorkoutsScreen: undefined;
  DetailsScreen: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme === "dark" ? "#222" : "#F5F5F5" },
      }}
    >
      <Tab.Screen
        name="WorkoutsScreen"
        component={WorkoutsScreen}
        options={{
          headerShown: false,
          
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: 0,
                  color,
                }}
              >
                Workouts
              </Text>
            ) : null,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: -5,
              }}
            >
              <Icon
                name={focused ? "barbell" : "barbell-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (focused ? <Text>Home</Text> : null),
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
