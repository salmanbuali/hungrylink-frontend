import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div>Hello</div>
      <div>
        <Navbar />
      </div>
      <main>
        {/* <Routes>
          <Route path="/" element ={<Home />}/>
        </Routes> */}
      </main>
    </>
  )
}

export default App
