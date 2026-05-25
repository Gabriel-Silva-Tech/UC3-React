import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Aruba from './componentes/Aruba'
import China from './componentes/China'
import Grand_Canyon from './componentes/Grand_Canyon'
import componenteProps from './componentes/componentesProps.jsx'


function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Escocia' element= {<Escocia />} />
        <Route path='/Aruba' element= {<Aruba />} />
        <Route path='/China' element= {<China />} />
        <Route path='/Grand_Canyon' element= {<Grand_Canyon />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
