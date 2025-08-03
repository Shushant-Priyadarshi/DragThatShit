import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AboutPage from './pages/About.tsx';
import Dashboad from './pages/dashboard.tsx';
import NotFound from './components/common/not-found.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/dashboard", element: <Dashboad /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
