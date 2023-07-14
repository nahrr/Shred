import { UseQueryResult, useQuery } from "react-query";

//TODO
const fetchMuscleGroups = async (): Promise<any> => {
  const res = await fetch(""); //

  if (!res.ok) {
    throw new Error("Network response was not ok"); //TODO: fix proper error handling
  }

  return res.json();
};

const useExercises = (): UseQueryResult<any, unknown> => {
  return useQuery("muscleGroups", fetchMuscleGroups);
};

export default useExercises;
