
import styles from "../css/componenteProps.module.css"

function ComponenteProps({lugar, texto, bandeira}){
    return(

        <div className={styles.corpo_texto}>
            <h2>Venha conhecer esse lugar incrivel</h2>
            <h2> {lugar} </h2>
            <p> {texto} </p>
            <img src={bandeira}  alt="bandeira do pais" className={styles.imagem_props} alt= "bandeira do pais"/> 
        </div>
    
    )
}
export default ComponenteProps