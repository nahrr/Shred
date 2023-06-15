import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ThemeContext from "../context/ThemeContext";
import { Text, View } from "react-native";
import WorkoutScreen from "../screens/WorkoutScreen";

type TabNavigatorParamsList = {
  WorkoutsScreen: undefined;
  ProfileScreen: undefined;
  WorkoutScreen: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);

  const getTabBarLabel = (
    focused: boolean,
    color: string,
    name: string
  ): React.ReactNode | null => {
    return focused ? (
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          textAlign: "center",
          padding: 0,
          color,
        }}
      >
        {name}
      </Text>
    ) : null;
  };

  const getTabBarIcon = (
    focused: boolean,
    color: string,
    size: number,
    iconName: string
  ) => {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: -5,
        }}
      >
        <Icon
          name={focused ? `${iconName}` : `${iconName}-outline`}
          size={size}
          color={color}
        />
      </View>
    );
  };

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
            getTabBarLabel(focused, color, "Home"),

          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(focused, color, size, "home"),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) =>
            getTabBarLabel(focused, color, "Workout"),
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(focused, color, size, "barbell"),

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) =>
            getTabBarLabel(focused, color, "Profile"),
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(focused, color, size, "person-circle"),

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
