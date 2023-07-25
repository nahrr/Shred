import React from "react";
import { View } from "react-native";
import { ExerciseProvider } from "../context/ExerciseContext";
import AddToWorkoutButton from "../components/AddToWorkoutButton";
import SearchExercise from "../components/SearchExercise";
import ExerciseList from "../components/ExerciseList";
import MuscleGroupPicker from "../components/MuscleGroupPicker";

const AddExerciseScreen = () => {
  return (
    <ExerciseProvider>
      <View style={{ flex: 1 }}>
        <SearchExercise />
        <MuscleGroupPicker />
        <ExerciseList />
        <AddToWorkoutButton />
      </View>
    </ExerciseProvider>
  );
};

export default AddExerciseScreen;
