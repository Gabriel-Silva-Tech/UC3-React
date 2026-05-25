import styles from "../css/Grand_Canyon.module.css"
import ComponenteProps from "./componentesProps"
import Bandeira_Grand_Canyon from "../assets/imagens/usa.png"
import ComponenteProps_formulario from "./Props_formulario"

function Grand_Canyon (){

    return(
        <section className={styles.Grand_Canyon}>
            <h1> Venha conhecer a Grand Canyon!! </h1>
            <ComponenteProps 
            lugar = "Grand_Canyon"
            texto="Esse pais fantástico, com seus encantos e suas montanhas!!" 
            bandeira = {Bandeira_Grand_Canyon}/>

            <ComponenteProps_formulario />

        </section>
    )
}

export default Grand_Canyon