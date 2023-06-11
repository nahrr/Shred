import { createContext, Dispatch, SetStateAction } from "react";

export type Theme = "dark" | "white";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
});

export default ThemeContext;
