import axios from "axios";
import { setCredentials } from "features/auth/authSlice";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useSwrUser = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const { data, error } = useSWR(
    token ? `/api/checkToken?token=${token}` : null,
    fetcher
  );

  if (data) {
    dispatch(setCredentials(data));
  }

  return {
    user: data?.user,
    authenticated: data?.authenticated,
    message: data?.message,
    error,
    loading: !data && !error,
  };
};

export default useSwrUser;
