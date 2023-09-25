import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth.page';
import Dashboard from './pages/dashboard.page';
import Settings from './pages/settings.page';
import { AuthProvider } from './context/AuthContext';
import RouteGuard from './RouteGuard';

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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
