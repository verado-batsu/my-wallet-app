import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserAccountProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userAccount, setUserAccount] = useState(null);
    const [balance, setBalance] = useState(0);

    return (
        <UserContext.Provider
            value={{
                userAccount,
                balance,
                isLoading,
                setUserAccount,
                setBalance,
                setIsLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
