import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'; // Corrected import
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Endpoints from './pages/Endpoints';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="endpoints" element={<Endpoints />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
