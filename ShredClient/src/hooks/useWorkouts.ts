import { useQuery } from "react-query";

const fetchWorkouts = async (): Promise<any> => {
  const res = await fetch(
    "http://192.168.0.105:5000/api/workout/03b84690-fb57-454a-affc-af9a49d6b73f"
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
