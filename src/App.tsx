import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/settings', element: <Settings /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
