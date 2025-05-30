export type ThemeStateType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  getInitialTheme: () => void;
};