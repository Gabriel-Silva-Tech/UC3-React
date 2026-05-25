import styles from '../Css/Contato.module.css'
import whats from '../assets/whats.png'
import face from '../assets/face.png'
import insta from '../assets/insta.png'

function Contato (){
return(

    <section className={styles.forma_de_contato}>
            
            <form> 
                <div> 
                    <label for="nome">Entre com seu nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome aqui:"/>
                </div>
                <div>
                    <label for="email">Entre com seu e-mail:</label>
                    <input type="text" id="email" placeholder="Digite seu email aqui:"/>
                </div>
            <div>
                <textarea placeholder="Faça seu pedido aqui:"></textarea>

                <button type="submit">Enviar</button> 
            </div>
        </form>
            <div className={styles.redes_sociais}>
            
                <h2>Acesse também nossas redes sociais:</h2>

                <div className={styles.redes_sociais_imgs}>
                    <a href="#"><img src={whats} alt="Imagem do WhatsApp"/></a>
                    <a href="#"><img src={insta} alt="Imagem do Instagram"/></a>
                    <a href="#"><img src={face} alt="Imagem do Facebook"/></a>
                </div>
            </div>

     </section>


        )

    }

export default Contato