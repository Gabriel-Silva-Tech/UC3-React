import styles from '../Css/Endereco.module.css'

function Endereco (){

    return(
      
        <section className={styles.endereco}>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1229200302255!2d-46.69433512578888!3d-23.528080960368303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1772853266587!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                style={{border:0}} allowfullscreen
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.texto_endereco}> 
                <h2>Nossa Loja - Instrumentos Musicais</h2>

                <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, em uma área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda a família!</p>
            </div>
        </section>
           
    )
}

export default Endereco 

// Lembrar sempre de usar o style. porque estamos usando o module.css