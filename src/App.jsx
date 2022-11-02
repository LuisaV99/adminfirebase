import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar.jsx';
import useNavbar from './Hooks/useNavbar.js';
import CardProd from './Views/Productos/Card-Prod.jsx';

export default function App() {
  const {Nav}= useNavbar()

  return (
    <div className="">
  <Navbar data={Nav}/>
  <Routes>
    <Route path='/Productos' element={<CardProd/>}>Productos</Route>
  </Routes>
  </div>
  )
}

