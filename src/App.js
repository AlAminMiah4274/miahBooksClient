import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
