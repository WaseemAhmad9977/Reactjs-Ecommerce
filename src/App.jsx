import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'animate.css';
import Order from './components/Admin/Order';
import NotFound from './components/NotFound';
import Product from './components/Admin/Product';
import Dashboard from './components/Admin/Dashboard';
import Customer from './components/Admin/Customer';
import Payment from './components/Admin/Payment';
import Setting from './components/Admin/Setting';
import Home from './components/Home';
import Productss from './components/Productss';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';





const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Productss/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path="/admin">
          <Route path='product' element={<Product/>} />
          <Route path="order" element={<Order/>}/>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path="customer" element={<Customer/>}/>
          <Route path="payment" element={<Payment/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}


export default App;
