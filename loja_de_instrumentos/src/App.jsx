import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Produtos from './componentes/Produtos'
import Endereco from './componentes/Endereco'
import Contato from './componentes/Contato'

function App() {

  return (
   <main>
   <Router>
          <Header />
              <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/Produtos' element = {<Produtos />} />
                <Route path = '/Endereco' element = {<Endereco />} /> 
                <Route path = '/Contato' element = {<Contato />} />
             </Routes>
          <Footer />
   </Router>
   </main>
  )
}

export default App
