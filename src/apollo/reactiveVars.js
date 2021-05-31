import { isLoggedInVar } from "./client";
import { useQuery } from "@apollo/client";
import { USER_LOGIN_STATUS } from "./queries";

// TODO why on earth did I make this a hook? should be context
export const useIsLoggedIn = () => {
  const { data } = useQuery(USER_LOGIN_STATUS);

  const isLoggedIn = data?.isLoggedIn.status;

  const toggleIsLoggedIn = () => isLoggedInVar({ status: !isLoggedIn });

  return { isLoggedIn, toggleIsLoggedIn };
};
