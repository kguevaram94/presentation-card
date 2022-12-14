/* eslint-disable prettier/prettier */
import React, { FunctionComponent, ReactElement, useState } from 'react';
import { LoginResponse } from '../types/login';

import GlobalContext from './GlobalContext';

type Props = {
    children: ReactElement
};

const GlobalProvider: FunctionComponent<Props> = ({ children }) => {

    const [userInfo, setUserInfo] = useState<LoginResponse>();

    return (
        <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
