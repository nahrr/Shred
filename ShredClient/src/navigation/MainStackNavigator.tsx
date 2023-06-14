import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import DetailsScreen from "../screens/ProfileScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ThemeContext from "../context/ThemeContext";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";

export type MainStackParamList = {
  Workouts: undefined;
  Details: { workoutId: number };
  Create: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="Workouts">
        <Stack.Screen
          name="Workouts"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create"
          component={CreateWorkoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainStackNavigator;
