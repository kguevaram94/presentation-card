/* eslint-disable quotes */
import React from "react";
import { LoginResponse } from "../types/login";

type ContextProps = {
  userInfo: LoginResponse
  setUserInfo: (res: LoginResponse) => void
};

export default React.createContext<Partial<ContextProps>>({});
