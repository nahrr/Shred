import { Picker } from "@react-native-picker/picker";
import { useExerciseContext } from "../context/ExerciseContext";

export const defaultMuscle: string = "All muscles";
const muscleOptions = [
  defaultMuscle,
  "Abdominals",
  "Abductors",
  "Biceps",
  "Calves",
  "Cardio",
  "Chest",
  "Forearms",
  "Full Body",
  "Glutes",
  "Hamstrings",
  "Lats",
  "Lower Back",
  "Quadriceps",
  "Shoulders",
  "Traps",
  "Triceps",
  "Upper Back",
]; //TODO: Have not decided yet whether to fetch from backend or not

const MuscleGroupPicker = () => {
  const { setSelectedMuscle, selectedMuscle } = useExerciseContext();

  return (
    <Picker selectedValue={selectedMuscle} onValueChange={setSelectedMuscle}>
      {muscleOptions.map((muscle, index) => (
        <Picker.Item key={index} label={muscle} value={muscle} />
      ))}
    </Picker>
  );
};

export default MuscleGroupPicker;
