import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom';
import Generator from './pages/Generator';
import Greeting from './pages/Greeting';
import "./index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Generator />} />
      <Route path="/greeting/:id" element={<Greeting />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
