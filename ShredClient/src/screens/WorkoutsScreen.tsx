import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useWorkouts from "../hooks/useWorkouts";
import { formatDate } from "../utils/dateFormatter";
import ThemeContext from "../context/ThemeContext";

const WorkoutsScreen = () => {
  const { data: workout, isLoading, isError } = useWorkouts();
  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
    },
    workoutName: {
      fontSize: 24,
      marginBottom: 8,
      color: theme === "dark" ? "#FFF" : "#333",
      fontWeight: "bold",
    },
    workoutDate: {
      fontSize: 16,
      marginBottom: 8,
      color: theme === "dark" ? "#BBB" : "#666",
    },
    workoutStatus: {
      fontSize: 14,
      marginBottom: 16,
      color: theme === "dark" ? "#BBB" : "#666",
    },
    exerciseContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme === "dark" ? "#444" : "#DDD",
    },
    exerciseName: {
      fontSize: 18,
      color: theme === "dark" ? "#FFF" : "#333",
      fontWeight: "bold",
    },
    setContainer: {
      paddingLeft: 20,
      paddingVertical: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>{workout.name}</Text>
      <Text style={styles.workoutDate}>{formatDate(workout.date)}</Text>
      <Text style={styles.workoutStatus}>
        {workout.isCompleted ? "Completed" : "Not Completed"}
      </Text>
      <FlatList
        data={workout.exercises}
        keyExtractor={(item) => item.id}
        style={styles.exerciseContainer}
        renderItem={({ item: exercise }) => (
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <FlatList
              data={exercise.sets}
              style={styles.setContainer}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item: set }) => (
                <View style={styles.setContainer}>
                  <Text>Reps: {set.reps}</Text>
                  <Text>Weight: {set.weight}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  workoutName: {
    fontSize: 24,
    marginBottom: 8,
  },
  workoutDate: {
    fontSize: 16,
    marginBottom: 8,
  },
  workoutStatus: {
    fontSize: 14,
    marginBottom: 16,
    color: "gray",
  },
  exerciseContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  exerciseName: {
    fontSize: 18,
  },
  setContainer: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
});
export default WorkoutsScreen;
