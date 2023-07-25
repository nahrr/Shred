import { FlatList } from "react-native";
import { useExerciseContext } from "../context/ExerciseContext";
import { ExerciseResponse } from "../types/ExerciseResponse";
import ExerciseItem from "./ExerciseItem";
import { FC, memo, useCallback } from "react";

const ExerciseList = () => {
  const { searchResults } = useExerciseContext();

  const renderItem = useCallback(
    ({ item }: { item: ExerciseResponse }) => (
      <ExerciseItemRenderer item={item} />
    ),
    []
  );

  return (
    <FlatList
      data={searchResults}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={10}
      maxToRenderPerBatch={20}
      updateCellsBatchingPeriod={50}
    />
  );
};

export default ExerciseList;

const ExerciseItemRenderer: FC<{ item: ExerciseResponse }> = memo(
  ({ item }) => {
    console.log(item.name);
    return <ExerciseItem item={item} />;
  }
);
