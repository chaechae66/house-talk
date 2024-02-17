import { ReactNode, createContext, useState } from "react";

export interface AddrContextType {
  addr: string;
  setAddr: (value: string) => void;
}

interface Props {
  children: ReactNode;
}

export const AddrContext = createContext<AddrContextType>({
  addr: "",
  setAddr(value) {
    return null;
  },
});

export const AddrContextProvider = ({ children }: Props) => {
  const [addr, setAddr] = useState("");

  return (
    <AddrContext.Provider value={{ addr, setAddr }}>
      {children}
    </AddrContext.Provider>
  );
};
