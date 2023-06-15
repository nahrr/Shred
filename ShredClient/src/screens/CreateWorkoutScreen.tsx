import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import ThemeContext from "../context/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";
import { MainStackParamList } from "../navigation/MainStackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
const CreateWorkoutScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
      alignItems: "center",
    },
    statsContainer: {
      backgroundColor: "grey",
      width: "100%",
      justifyContent: "space-evenly",
      rowGap: 10,
      flexDirection: "row",
    },
    addExerciseContainer: {
      gap: 10,
      marginTop: 10,
      alignItems: "center",
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#fff",
    },
    icon: {
      color: "#FFFFFF",
      marginRight: 8,
    },
    actionText: {
      fontSize: 16,
      color: "#FFFFFF",
    },
    button: {
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      flexDirection: "row",
    },
    buttonNotPressed: {
      backgroundColor: theme === "dark" ? "black" : "white",
    },
    buttonPressed: {
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.actionText}>Volume</Text>
        <Text style={styles.actionText}>Sets</Text>
      </View>
      <View style={styles.addExerciseContainer}>
        <Text style={styles.actionText}>Get started</Text>
        <Text style={styles.actionText}>
          Add an exercise to start your workout
        </Text>
        <View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : styles.buttonNotPressed,
            ]}
            onPress={() => navigation.navigate("AddExercise")}
          >
            <Icon style={styles.icon} name="add-circle" size={25} />
            <Text style={styles.actionText}>Add exercise</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default CreateWorkoutScreen;
