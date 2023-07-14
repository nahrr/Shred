import { UseQueryResult, useQuery } from "react-query";
import { ExerciseResponse } from "../types/ExerciseResponse";

const fetchExercises = async (): Promise<ExerciseResponse[]> => {
  const res = await fetch("http://94.255.234.74:5000/api/exercise?take=400");

  if (!res.ok) {
    throw new Error("Network response was not ok"); //TODO: fix proper error handling
  }

  return res.json();
};

const useExercises = (): UseQueryResult<ExerciseResponse[], unknown> => {
  return useQuery("exercicesx", fetchExercises);
};

export default useExercises;
