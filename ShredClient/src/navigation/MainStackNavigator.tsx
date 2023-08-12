import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import ThemeContext from "../context/ThemeContext";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";
import HomeScreen from "../screens/WorkoutScreen";
import AddExerciseScreen from "../screens/AddExerciseScreen";

export type MainStackParamList = {
  Workouts: undefined;
  Profile: undefined;
  CreateWorkout: undefined;
  Workout: undefined;
  AddExercise: undefined;
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
          name="Workout"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CreateWorkout"
          component={CreateWorkoutScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddExercise"
          component={AddExerciseScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainStackNavigator;
