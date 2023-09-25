import { createContext, useState, useEffect, ReactNode } from 'react';
import * as auth from '../utils/auth';
import { UserI } from '../types/user.interface';

interface PropsI {
  children: ReactNode;
}

export interface AuthValuesI {
  user: { email?: string; verified?: string; sub?: string } | null;
  isLoading: boolean;
  signUp: (e: string, p: string) => Promise<void>;
  signIn: (e: string, p: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthValuesI>({} as AuthValuesI);

const AuthProvider = ({ children }: PropsI) => {
  const [user, setUser] = useState<UserI | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const user = (await auth.getCurrentUser()) as UserI;
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  const signUp = async (email: string, password: string) => {
    await auth.signUp(email, password);
    await getCurrentUser();
  };

  const signIn = async (email: string, password: string) => {
    await auth.signIn(email, password);
    await getCurrentUser();
  };

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const authValues = {
    user,
    isLoading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
