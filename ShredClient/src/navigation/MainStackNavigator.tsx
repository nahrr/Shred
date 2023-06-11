import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutsScreen from "../screens/WorkoutsScreen";

export type MainStackParamList = {
  Workouts: undefined;
  Details: { workoutId: number };
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Workouts">
      <Stack.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{ title: "My Workouts" }}
      />
      {/* <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Workout Details" }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
