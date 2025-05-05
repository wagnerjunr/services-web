"use client";

import { useLayoutEffect, useRef } from "react";
import { useAuthStore } from "./useAuthStore";
import type { UserProps } from "@/types/databaseTypes";

type SyncAuthStoreProps = {
  user: UserProps | null;
};

export const SyncAuthStore = ({ user }: SyncAuthStoreProps) => {
  const initializer = useRef(false);

  useLayoutEffect(() => {
    if (!initializer.current) {
      useAuthStore.setState({ user: user });
      initializer.current = true;
    }
  }, []);
  return null;
};
