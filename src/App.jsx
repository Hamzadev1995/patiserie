// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import Blog from './page/Apropos'
import Contact from './page/Contact'
import Apropos from './page/Apropos'
import Gallerie from './page/Gallerie'

function App() {
  return (
    <div className='w-full'>
          <Navbar/>
          <main className='w-full'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Apropos' element={<Apropos/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/Gallerie' element={<Gallerie/>}/>
            </Routes>
          </main>
          <Footer/> 
        </div>
  )
}

export default App
