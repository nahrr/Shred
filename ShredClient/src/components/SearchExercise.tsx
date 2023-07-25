import { TextInput } from "react-native";
import { useExerciseContext } from "../context/ExerciseContext";

const SearchExercise = () => {
  const { setSearchTerm, searchTerm } = useExerciseContext();

  return (
    <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
      }}
      onChangeText={setSearchTerm}
      value={searchTerm}
      placeholder="Search exercises"
    />
  );
};

export default SearchExercise;
