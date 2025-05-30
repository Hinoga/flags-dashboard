import { useThemeStore } from "@/features/theme/state";
import { useEffect } from "react";

export const AppInit = () => {
  const themeStore = useThemeStore();

  useEffect(() => {
    themeStore.getInitialTheme();
  }, []);

  return null;
};
