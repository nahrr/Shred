import React, { FC, memo, useCallback } from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import { ExerciseResponse } from "../types/ExerciseResponse";
import { Pressable, View, Text } from "react-native";
import { Image } from "expo-image";

interface ExerciseItemProps {
  item: ExerciseResponse;
}
const blurhash: string = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"; //TODO, common?!

const ExerciseItem: FC<ExerciseItemProps> = memo(({ item }) => {
  const { selectedExercises, setSelectedExercises } = useExerciseContext();

  const handlePress = useCallback(() => {
    setSelectedExercises((currentSet) => {
      const newSet = new Set(currentSet);
      const isSelected = currentSet.has(item.id);
      if (isSelected) {
        newSet.delete(item.id);
      } else {
        newSet.add(item.id);
      }
      return newSet;
    });
  }, [item.id, setSelectedExercises]);

  const isSelected = selectedExercises.has(item.id);

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
      onPress={handlePress}
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
});

export default ExerciseItem;
