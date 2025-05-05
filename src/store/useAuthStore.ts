import type { UserProps } from "@/types/databaseTypes";
import { create } from "zustand";

export interface AuthStoreProps {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
}

export const useAuthStore = create<AuthStoreProps>((set) => {
  return {
    user: null,
    setUser: (user: UserProps) => set({ user }),
  };
});
