import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <h1>Welcome user {user?.email}</h1>
      <h3>Dashboard Page</h3>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};

export default Dashboard;
