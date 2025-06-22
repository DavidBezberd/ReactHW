import { Outlet } from 'react-router-dom';
import './App.css'
import { Menu } from './components/menu/menu';
import './components/menu/menu.css';


function App () {
  return (
    <>
    <Menu/>
    This is app component
    <Outlet/>
    </>
  );
}

export default App

