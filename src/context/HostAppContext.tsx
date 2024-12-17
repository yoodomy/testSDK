import React, { createContext, useContext, useState } from 'react';

interface UserProfile {
  dguardId: any;
  fullName: any;
  firstName: any;
  username: any;
  email: any;
  preferContactEmail: any;
  avatar: any;
  identityProviders: any;
  dguardMsisdn: any;
}

interface HostAppContextValue {
  userProfile: UserProfile;
  setUserProfile: (info: UserProfile) => void;
}

const HostAppContext = createContext<HostAppContextValue | undefined>(
  undefined
);

export const HostAppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const value = {
    userProfile,
    setUserProfile,
  };

  return (
    <HostAppContext.Provider value={value}>{children}</HostAppContext.Provider>
  );
};

export const useHostApp = () => {
  const context = useContext(HostAppContext);
  if (!context) {
    throw new Error('useHostApp must be used within HostAppProvider');
  }
  return context;
};
