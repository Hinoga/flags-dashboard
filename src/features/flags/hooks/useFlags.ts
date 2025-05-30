import { useQuery } from "@tanstack/react-query";
import { fetchFlags } from "../api";

export const useFlags = () =>
  useQuery({ queryKey: ["flags"], queryFn: fetchFlags });
