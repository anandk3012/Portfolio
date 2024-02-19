import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {

  return (
    <div className='h-screen w-full'>
        <Router>
          <Header />
            <Routes>
                <Route exact path='/' element={<About />}/>
                <Route exact path='/projects' element={<Projects />}/>
            </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App
