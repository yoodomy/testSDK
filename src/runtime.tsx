import React, { PropsWithChildren, useEffect, useState } from 'react';
import i18next from './utils/i18next';

import { Payments } from './api/payments';
import { Permissions } from './api/permissions';
import { User, UserContext } from './api/user';

export function SDKRuntimeProvider({
  children,
  permissions,
  user,
  payments,
}: PropsWithChildren<{
  permissions: Permissions;
  user: UserContext;
  payments: Payments;
}>) {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const handleInitialized = () => {
      setI18nReady(true);
    };

    if (i18next.isInitialized) {
      handleInitialized();
    } else {
      i18next.on('initialized', handleInitialized);
    }

    return () => {
      i18next.off('initialized', handleInitialized);
    };
  }, []);

  console.log('runtimeeee')
  return (
    <Permissions.Provider value={permissions}>
      <User.Provider value={user}>
        <Payments.Provider value={payments}>{children}</Payments.Provider>
      </User.Provider>
    </Permissions.Provider>
  );
}
