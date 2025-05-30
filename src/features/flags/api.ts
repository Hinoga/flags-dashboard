import type { FeatureFlagType } from "./types";

export const fetchFlags = async (): Promise<FeatureFlagType[]> => {
  const res = await fetch("/api/flags");
  if (!res.ok) throw new Error("Failed to fetch flags");

  return res.json();
};

export const patchFlag = async (
  flag: FeatureFlagType
): Promise<FeatureFlagType> => {
  const res = await fetch(`/api/flags/${flag.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: !flag.enabled }),
  });
  if (!res.ok) throw new Error("Failed to toggle flag");

  return res.json();
};
