import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div className='sm:px-10 px-3 sm:w-full bg-[#fdfdff] overflow-hidden'>


      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/collection' element={ <Collection />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/product/:productId' element={ <Product />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/place-order' element={ <PlaceOrder />} />
        <Route path='/orders' element={ <Orders />} />
        <Route path='/my-profile' element={ <MyProfile />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App