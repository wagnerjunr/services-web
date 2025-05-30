import { create } from "zustand";

export interface TokenProps {
  accessToken: string | null; 
  setAccessToken: (accessToken: string | null) => void; 
}

export const useAcessTokenStore = create<TokenProps>((set) => ({
  accessToken: null, // Initial value is null
  setAccessToken: (token) => set({ accessToken: token }),
}));
