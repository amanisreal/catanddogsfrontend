import './App.css';
import Navbar from './components/JS/Navbar';
import {
  BrowserRouter,
  createBrowserRouter, 
  RouterProvider  
} from 'react-router-dom'
import Home from './components/JS/Home';
import Login from "./components/JS/login"

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar/>
      <Home/>
    </>
  },
  {
    path: '/login',
    element: <>
      <Navbar/>
      <Login/>
    </>
  }
])


function App() {
  return (
    <div className="appContainer">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
