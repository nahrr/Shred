import React, { createContext, useState, useContext, useEffect } from "react";
import { ExerciseResponse } from "../types/ExerciseResponse";
import useExercises from "../hooks/useExercises";

interface ExerciseContextValue {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: ExerciseResponse[];
  setSearchResults: React.Dispatch<React.SetStateAction<ExerciseResponse[]>>;
  selectedExercises: Set<string>;
  setSelectedExercises: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedMuscle: string;
  setSelectedMuscle: React.Dispatch<React.SetStateAction<string>>;
}

const ExerciseContext = createContext<ExerciseContextValue | undefined>(
  undefined
);

const defaultMuscle = "All muscles"; //TODO

export const ExerciseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ExerciseResponse[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<Set<string>>(
    new Set()
  );
  const [selectedMuscle, setSelectedMuscle] = useState<string>(defaultMuscle); //TODO

  const { data: exercises, isLoading, isError } = useExercises();

  useEffect(() => {
    if (!exercises) {
      return;
    }
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

  const value = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    selectedExercises,
    setSelectedExercises,
    selectedMuscle,
    setSelectedMuscle,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = (): ExerciseContextValue => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useExerciseContext must be used within ExerciseProvider");
  }
  return context;
};
