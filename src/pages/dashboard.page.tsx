import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './p_styles/dashboard.page.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='dashboard'>
      <h1>Hello!</h1>
      <p>Signed in with email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
