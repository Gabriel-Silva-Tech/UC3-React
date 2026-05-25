import {Link} from 'react-router-dom'
import styles from '../Css/Header.module.css'
import guitarra_cabecalho from '../assets/guitarras_header.jpg'

function Header (){

    return(
        <header>
            <div className={styles.guitarra_cabecalho}>
                 <img src={guitarra_cabecalho} alt="banner do cabeçalho"/>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Produtos'>Instrumentos</Link></li>
                    <li><Link to='/Endereco'>Endereço</Link></li>
                    <li><Link to='/Contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
