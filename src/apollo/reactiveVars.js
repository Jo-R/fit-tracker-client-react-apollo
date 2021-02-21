import { isLoggedInVar } from "./client";
import { useQuery } from "@apollo/client";
import { USER_LOGIN_STATUS } from "./queries";

export const useIsLoggedIn = () => {
  const { data } = useQuery(USER_LOGIN_STATUS);

  const isLoggedIn = data?.isLoggedIn.status;

  const toggleIsLoggedIn = () => isLoggedInVar({ status: !isLoggedIn });

  return { isLoggedIn, toggleIsLoggedIn };
};
