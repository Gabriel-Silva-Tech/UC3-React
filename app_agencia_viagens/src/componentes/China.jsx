import styles from "../css/China.module.css"
import ComponenteProps from "./componentesProps"
import Bandeira_China from "../assets/imagens/China.png"
import ComponenteProps_formulario from "./Props_formulario"

function China(){
    return(
        <section className={styles.fundo_China}>
            <h1> Venha conhecer as mulharas da china!! </h1>
            <ComponenteProps 
            lugar = "China"
            texto="Venha conhecer as grandes muralhas da China!!" 
            bandeira = {Bandeira_China}
            /> 

            <ComponenteProps_formulario />

        </section>
    )
}
export default China