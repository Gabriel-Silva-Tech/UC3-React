import styles from '../css/Footer.module.css'
import whatsapp from '../assets/imagens/whtas.png'
import tiktok from '../assets/imagens/tiktok.png'
import instagram from '../assets/imagens/insta.jfif'
import facebook from '../assets/imagens/facebook.webp'

function Footer(){
    return(
        <footer className='titulo_redes'>
            <h1>Siga-nos em nossas redes sociais</h1>
                    <div className={styles.container_redes} >
                        <img src= {whatsapp} alt= "facebook" />
                        <img src= {tiktok} alt= "tiktok" />
                        <img src= {instagram} alt= "instagram" />
                        <img src= {facebook} alt= "facebook" />
                    </div>
                    <h4>Telefone de contato: 11940028922</h4>
        </footer>
    )
}
export default Footer