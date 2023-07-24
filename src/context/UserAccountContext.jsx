import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserAccountProvider = ({ children }) => {
    const [stateOfTransaction, setStateOfTransaction] = useState(null);
    const [userAccount, setUserAccount] = useState(null);
    const [balance, setBalance] = useState(0);

    return (
        <UserContext.Provider
            value={{
                userAccount,
                balance,
                stateOfTransaction,
                setUserAccount,
                setBalance,
                setStateOfTransaction,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
