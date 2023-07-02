import { UseQueryResult, useQuery } from "react-query";
import { ExerciseResponse } from "../types/ExerciseResponse";

const fetchExercises = async (): Promise<ExerciseResponse[]> => {
  const res = await fetch("http://192.168.0.105:5000/api/exercise?take=400");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};

const useExercises = (): UseQueryResult<ExerciseResponse[], unknown> => {
  return useQuery("exercices", fetchExercises);
};

export default useExercises;
