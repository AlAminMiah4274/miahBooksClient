import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
