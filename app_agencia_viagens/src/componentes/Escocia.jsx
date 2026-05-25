import styles from "../css/Escocia.module.css"
import ComponenteProps from "./componentesProps"
import Bandeira_escocia from "../assets/imagens/Escocia.png"
import ComponenteProps_formulario from "./Props_formulario"


function Escocia({className}){

    return(
        
        <section className={styles.fundo_escocia}>
            <h1> Venha conhecer a Escocia!!</h1>
            <div className={styles.wrapper_cards}>
            <ComponenteProps 
            lugar = "Escocia"
            texto="Esse pais fantástico, com seus encantos e seus castelos medievais!!" 
            bandeira = {Bandeira_escocia}
            /> 

            <ComponenteProps_formulario />

        </div>
        </section>
    )
}

export default Escocia  