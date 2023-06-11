import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import ThemeProvider from "./src/components/ThemeProvider";

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
