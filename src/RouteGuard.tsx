import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

interface PropsI {
  children: React.ReactNode;
}

const RouteGuard = ({ children }: PropsI) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <></>;
  }

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default RouteGuard;
