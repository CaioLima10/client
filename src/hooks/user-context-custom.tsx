import { UserContext } from "@/context/user-context";
import { useContext } from "react";

export const UserDataContext = () => {
  const userData = useContext(UserContext);

  return userData;
};
