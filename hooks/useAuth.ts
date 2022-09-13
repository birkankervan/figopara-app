import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

export const useAuth = () => {
  const { authenticated } = useSelector(selectCurrentUser);

  return useMemo(() => ({ authenticated }), [authenticated]);
};
