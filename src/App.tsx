import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth.page';
import Dashboard from './pages/dashboard.page';
import Settings from './pages/settings.page';

const router = createBrowserRouter([
  { path: '/', element: <AuthPage /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/settings', element: <Settings /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
