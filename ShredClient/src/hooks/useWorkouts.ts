import { useQuery } from "react-query";

const fetchWorkouts = async (): Promise<any> => {
  const res = await fetch(
    "http://192.168.0.105:5000/api/workout/9AD03FF4-DF34-40A2-9170-3A672E6ABB5A"
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};

const useWorkouts = () => {
  return useQuery("workouts", fetchWorkouts);
};

export default useWorkouts;
