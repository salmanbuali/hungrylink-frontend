import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Order from './pages/Order'
import { CheckSession } from './services/Auth'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Menu from './pages/Menu'
import AddCat from './pages/AddCat'
import Footer from './components/Footer'
import AddItem from './pages/AddItem'
import UserUpdate from './pages/UserUpdate'
import Cart from './components/Cart'

const App = () => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  const [r_id, setr_id] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    // Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <div>
        <Navbar user={user} handleLogOut={handleLogOut} cart={cart}/>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu/:restId" element={<Menu user={user} cart={cart} setCart={setCart} r_id={r_id} setr_id={setr_id}/>} />
          <Route path="/createcategory" element={<AddCat user={user} />} />
          <Route path="/createitem/:catId" element={<AddItem user={user} />} />
          <Route path="/updateuser/:userId" element={<UserUpdate user={user} />} />
          <Route path="/cart" element={<Cart user={user}  cart={cart} setCart={setCart} r_id={r_id}/>} />

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
