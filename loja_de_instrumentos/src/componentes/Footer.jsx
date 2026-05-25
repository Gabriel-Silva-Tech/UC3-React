import styles from '../Css/Footer.module.css'
import whats from '../assets/whats.png'
import face from '../assets/face.png'
import insta from '../assets/insta.png'

function Footer (){

    return(
        <footer>
            <h4>Nossa Loja - Instrumentos Musicais</h4>
            <p>Rua Tito, 54 - Lapa <br />São Paulo - Brasil</p>
            <div id="rodape_imgs">
                 <img src={whats} alt="Icone do whatsapp no footer"/>
                 <img src={insta} alt="Icone do instegram  no footer"/>
                 <img src={face} alt="Icone do facebook no footer"/>
            </div>
        </footer>
    )
}

export default Footer 