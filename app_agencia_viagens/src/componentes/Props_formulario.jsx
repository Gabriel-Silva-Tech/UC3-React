import styles from "../css/Props_formulario.module.css";
import Logo from "../assets/imagens/viagens.jpg";

function PropsFormulario() {
  return (
    <div className={styles.props_formulario}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <form action="">
        <h3>Compre agora sua passagem!</h3>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu email" />
        <input type="text" placeholder="Digite seu contato" />
      </form>
      <button>Enviar</button>
    </div>
  );
}

export default PropsFormulario;
