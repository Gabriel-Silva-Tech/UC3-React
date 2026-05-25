import styles from '../Css/Home.module.css'
import fundo_guitarra from '../assets/IMG_fundo_da_pagina.jpg'
import loja from '../assets/loja.jpg'

function Home (){

    return(
    <div>
       <section className={styles.container_home}>
  

            <div className={styles.texto_inicio}>
                <h2>Nossa Loja - Instrumentos Musicais</h2>

                <p>
                    Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão de qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, soprano e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e receba-os em casa com toda a comodidade que você precisa.Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!
                </p>
            </div>
            <div className={styles.imagem_loja}>
                <img src={loja} alt='imagem da loja de instrumentos musicais'/>
            </div>
        </section>
    </div>

    )
}

export default Home 