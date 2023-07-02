import { View, Text, Pressable, Image, TextInput } from "react-native";
import useExercises from "../hooks/useExercises";
import { FlatList } from "react-native-gesture-handler";
import { ExerciseResponse } from "../types/ExerciseResponse";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

const defaultMuscle = "All muscles";

const AddExerciseScreen: React.FC = () => {
  const { data: exercises, isLoading, isError } = useExercises();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ExerciseResponse[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string>(defaultMuscle);

  const muscleOptions = [defaultMuscle, "Biceps", "Triceps", "Chest"]; //TODO: tmp

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  if (!exercises) {
    //TODO: need to check if exercises is not null, not sure how to handle
    return <Text>An error occurred</Text>;
  }

  const renderItem = ({ item }: { item: ExerciseResponse }) => {
    return (
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text>Tap to view instructions</Text>
        </View>
      </Pressable>
    );
  };

  useEffect(() => {
    const filteredExercises = exercises.filter((exercise) => {
      const exerciseNameWords = exercise.name.toLowerCase().split(" ");
      const isMatchedMuscle =
        selectedMuscle === defaultMuscle ||
        exercise.muscleGroup === selectedMuscle;
      const isMatchedSearchTerm =
        !searchTerm ||
        exerciseNameWords.some((word) =>
          word.includes(searchTerm.toLowerCase())
        );

      return isMatchedMuscle && isMatchedSearchTerm;
    });

    setSearchResults(filteredExercises);
  }, [searchTerm, exercises, selectedMuscle]);

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10 }}
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
        placeholder="Search exercises"
      />

      <Picker
        selectedValue={selectedMuscle}
        onValueChange={(value) => setSelectedMuscle(value)}
      >
        {muscleOptions.map((muscle, index) => (
          <Picker.Item key={index} label={muscle} value={muscle} />
        ))}
      </Picker>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AddExerciseScreen;
