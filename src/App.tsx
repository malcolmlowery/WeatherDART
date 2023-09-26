import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import RouteGuard from './RouteGuard';

// Pages
import AuthPage from './pages/auth.page';
import Dashboard from './pages/dashboard.page';
import Settings from './pages/settings.page';

// Components
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  { path: '/', element: <AuthPage /> },
  {
    path: '/dashboard',
    element: (
      <RouteGuard>
        <Dashboard />
      </RouteGuard>
    ),
  },
  {
    path: '/settings',
    element: (
      <RouteGuard>
        <Settings />
      </RouteGuard>
    ),
  },
]);

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
