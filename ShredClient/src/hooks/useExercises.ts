import { UseQueryResult, useQuery } from "react-query";
import { ExerciseResponse } from "../types/ExerciseResponse";

const EXERCISES_API = "http://192.168.1.225:5000/api/exercise?take=10"; //TODO

const fetchExercises = async (): Promise<ExerciseResponse[]> => {
  const res = await fetch(EXERCISES_API);

  if (!res.ok) {
    let errMsg = "Network response was not ok";
    try {
      const errRes = await res.json(); 
      errMsg = errRes?.ErrorMessage || errMsg;  
    } catch(e){}

    throw new Error(errMsg);
  }

  return res.json();
};

const useExercises = (): UseQueryResult<ExerciseResponse[], unknown> => {
  return useQuery("exercices", fetchExercises);
};

export default useExercises;
