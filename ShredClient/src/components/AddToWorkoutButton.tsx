import { Pressable, Text } from "react-native";
import { useExerciseContext } from "../context/ExerciseContext";

const AddToWorkoutButton = () => {
  const { selectedExercises } = useExerciseContext();

  if (selectedExercises.size === 0) {
    return null; // Don't show the button if no exercise is selected.
  }

  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? "darkblue" : "blue",
        padding: 10,
        margin: 10,
        alignItems: "center",
      })}
      // onPress={handleAddToWorkout} // TODO
    >
      <Text style={{ color: "white" }}>{`Add ${
        selectedExercises.size
      } exercise${selectedExercises.size === 1 ? "" : "s"}`}</Text>
    </Pressable>
  );
};

export default AddToWorkoutButton;
