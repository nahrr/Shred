import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const CreateWorkoutScreen = () => {
  const { theme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#222" : "#F5F5F5",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#fff",
    },
    actionContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "grey",
      borderRadius: 5,
    },
    icon: {
      color: "#FFFFFF",
      marginRight: 8,
    },
    actionText: {
      fontSize: 16,
      color: "#FFFFFF",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick Start</Text>
      <View style={styles.actionContainer}>
        <Icon style={styles.icon} name="add-circle" size={25} />
        <Text style={styles.actionText}>Start Empty workout</Text>
      </View>
    </View>
  );
};
export default CreateWorkoutScreen;
