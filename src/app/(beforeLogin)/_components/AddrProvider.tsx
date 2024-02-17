"use client";

import { AddrContextProvider } from "@/hooks/useAddrContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AddrProvider({ children }: Props) {
  return <AddrContextProvider>{children}</AddrContextProvider>;
}
