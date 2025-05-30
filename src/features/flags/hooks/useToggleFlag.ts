import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchFlag } from "../api";

export const useToggleFlag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchFlag,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["flags"] }),
  });
};
