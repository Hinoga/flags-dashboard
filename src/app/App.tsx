import { AppProviders } from "./providers";
import { FlagList } from "../features/flags/components/FlagList";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { AppInit } from "./AppInit";

const App = () => {
  return (
    <main className="p-6 bg-zinc-100 dark:bg-zinc-900 min-h-screen">
      <AppProviders>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Feature Flags
          </h1>
          <ThemeToggle />
        </div>
        <FlagList />
        <AppInit />
      </AppProviders>
    </main>
  );
};

export default App;
