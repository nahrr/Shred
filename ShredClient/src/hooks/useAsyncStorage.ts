import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setState(JSON.parse(value));
        } else {
          setState(initialValue);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [key, initialValue]);

  const setValue = async (value: T) => {
    try {
      const valueToStore = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueToStore);
      setState(value);
    } catch (error) {
      console.error(error);
    }
  };

  return { value: state, setValue: setValue };
};
