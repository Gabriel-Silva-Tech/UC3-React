import styles from '../Css/Produtos.module.css'
import violao from '../assets/guitarrinha.jpg'


function Produtos (){

    return(

    <section className={styles.violao}>
            <article className = "produto">
                <img src={violao} alt="Imagem de um violão"/>
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className="valor">R$ 989,50</p>
            </article>
              <article className = "produto">
                <img src={violao} alt="Imagem de um violão"/>
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className="valor">R$ 989,50</p>
            </article>
              <article className = "produto">
                <img src={violao} alt="Imagem de um violão"/>
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className="valor">R$ 989,50</p>
            </article>
              <article className = "produto">
                <img src={violao} alt="Imagem de um violão"/>
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className="valor">R$ 989,50</p>
            </article>
    </section>

       )
    }
    
export default Produtos