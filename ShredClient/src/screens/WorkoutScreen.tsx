import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/MainStackNavigator";

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

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
      <Text style={styles.heading}>Quick Start</Text>
      <View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : styles.buttonNotPressed,
          ]}
          onPress={() => navigation.navigate("CreateWorkout")}
        >
          <Icon style={styles.icon} name="add-circle" size={25} />
          <Text style={styles.actionText}>Start Empty workout</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default HomeScreen;
