import styles from "../css/Aruba.module.css"
import ComponenteProps from "./componentesProps"
import Bandeira_Aruba from "../assets/imagens/Aruba.png"
import ComponenteProps_formulario from "./Props_formulario"

function Aruba(){
    return(
        <section className={styles.fundo_Aruba}>
            <h1> Venha conhecer a Aruba!! </h1>
            <ComponenteProps 
            lugar = "Aruba"
            texto="Venha conhecer as lindas praias de Aruba!!" 
            bandeira = {Bandeira_Aruba}/> 

            <ComponenteProps_formulario />

        </section>
    )
}

export default Aruba