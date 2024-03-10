"use client";

import { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface UserData {
  user:
    | {
        id: number;
        email: string;
        username: string;
        userImg: string;
        bgImg: string;
      }
    | undefined;
  setUser: (newState: any) => void;
}

const initialValue = {
  user: undefined,
  setUser: () => {},
};

export const UserContext = createContext<UserData>(initialValue);

export function UserConetextProvider({ children }: ContextProps) {
  let userJSON;
  if (typeof window !== "undefined") {
    userJSON = localStorage.getItem("site-courses:user");
  }

  const [user, setUser] = useState(
    userJSON ? JSON.parse(userJSON) : initialValue.user
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
