import React, { useState, useEffect } from 'react';
import { AuthContext } from './auth-context';
import { createEmptyAuth } from './auth-helper';

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = props => {
  const [auth, setAuth] = useState<Auth>(createEmptyAuth());
  useEffect(() => {
    setAuth({
      sub: 'Test',
      isReady: true,
      hasAccess: true,
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...auth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
