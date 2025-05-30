import { Switch } from "@/components/ui/switch";
import { useThemeStore } from "../state";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">🌞</span>
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <span className="text-sm text-muted-foreground">🌚</span>
    </div>
  );
};
