import { View, Text, Pressable, TextInput } from "react-native";
import useExercises from "../hooks/useExercises";
import { FlatList } from "react-native-gesture-handler";
import { ExerciseResponse } from "../types/ExerciseResponse";
import { FC, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useAsyncStorage } from "../hooks/useAsyncStorage";
import React from "react";
import { Image } from "expo-image";

const defaultMuscle: string = "All muscles";

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

interface ItemProps {
  item: ExerciseResponse;
  onPress: () => void;
  isSelected: boolean;
}
const blurhash: string = "L6PZfSi_.AyE_3t7t7R**0o#DgR4";

const AddExerciseScreen = () => {
  const { data: exercises, isLoading, isError } = useExercises();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ExerciseResponse[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string>(defaultMuscle);
  const [selectedExercises, setSelectedExercises] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (!exercises) {
      return;
    }
    console.log("test");
    const filteredExercises = exercises.filter((exercise) => {
      const exerciseNameWords = exercise.name.toLowerCase();
      const isMatchedMuscle =
        selectedMuscle === defaultMuscle ||
        exercise.muscleGroup === selectedMuscle;
      const isMatchedSearchTerm =
        !searchTerm || exerciseNameWords.includes(searchTerm.toLowerCase());

      return isMatchedMuscle && isMatchedSearchTerm;
    });

    setSearchResults(filteredExercises);
  }, [searchTerm, exercises, selectedMuscle]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }
  const renderItem = ({ item }: { item: ExerciseResponse }) => {
    const isSelected = selectedExercises.has(item.id);

    const onPress = () => {
      const newSet = new Set(selectedExercises);
      if (isSelected) {
        newSet.delete(item.id);
      } else {
        newSet.add(item.id);
      }
      setSelectedExercises(newSet);
    };

    return (
      <ItemComponent item={item} onPress={onPress} isSelected={isSelected} />
    );
  };

  return (
    <View style={{ flex: 1 }}>
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
        initialNumToRender={10} // render 10 items initially
        maxToRenderPerBatch={20} // render 20 new items at most each batch
        updateCellsBatchingPeriod={50} // measure and render new cells every 50 ms
      />
      {selectedExercises.size > 0 && (
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: pressed ? "darkblue" : "blue",
            padding: 10,
            margin: 10,
            alignItems: "center",
          })}
          // onPress={handleAddToWorkout}
        >
          <Text style={{ color: "white" }}>{`Add ${
            selectedExercises.size
          } exercise${selectedExercises.size === 1 ? "" : "s"}`}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AddExerciseScreen;

//TODO:
const ItemComponent: FC<ItemProps> = React.memo(
  ({ item, onPress, isSelected }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            backgroundColor: pressed
              ? "rgba(0,0,0,0.1)"
              : isSelected
              ? "lightgreen"
              : "transparent",
          },
        ]}
        onPress={onPress}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 50, height: 50, marginRight: 10 }}
          placeholder={blurhash}
          cachePolicy="disk"
          contentFit="cover"
          transition={1000}
        />
        <View>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text>{item.muscleGroup}</Text>
        </View>
      </Pressable>
    );
  }
);
