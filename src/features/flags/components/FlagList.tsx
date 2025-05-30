import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import type { FeatureFlagType } from "../types";
import { useFlags } from "../hooks/useFlags";
import { useToggleFlag } from "../hooks/useToggleFlag";

export const FlagList = () => {
  const { data, isLoading } = useFlags();
  const toggleFlag = useToggleFlag();

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="grid gap-4">
      {data?.map((flag: FeatureFlagType) => (
        <Card
          key={flag.id}
          className="flex items-center justify-between px-6 py-4 rounded-2xl shadow-sm bg-white dark:bg-zinc-900"
        >
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              {flag.name}
            </h3>
            <p className="text-sm text-muted-foreground">{flag.id}</p>
          </div>

          <Switch
            checked={flag.enabled}
            onCheckedChange={() => toggleFlag.mutate(flag)}
          />
        </Card>
      ))}
    </div>
  );
};
