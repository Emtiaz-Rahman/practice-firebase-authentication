import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import Regester from './Components/Regester/Regester'
import Login from './Components/Login/Login'




function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>


    </div>
  );
}

export default App;