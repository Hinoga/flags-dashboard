import { create } from "zustand";
import type { ThemeStateType } from "./types";

export const useThemeStore = create<ThemeStateType>((set, get) => ({
  theme: "light",
  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    set({ theme: newTheme });
  },
  getInitialTheme: () => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const theme = stored === "dark" || stored === "light" ? stored : "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
    set({ theme });
  },
}));
