import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import Regester from './Components/Regester/Regester'
import LogIn from './Components/LogIn/LogIn'
import RequireAuth from './Components/RequireAuth/RequireAuth';







function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}>
        </Route>

      </Routes>


    </div>
  );
}

export default App;