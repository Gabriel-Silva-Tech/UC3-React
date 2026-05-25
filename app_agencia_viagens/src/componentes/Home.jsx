import styles from '../css/Home.module.css'
function Home(){
    return(
        <section className={styles.container_home}>
            <h1></h1>
            <div className={styles.mala}></div>
            <div className={styles.texto}>
            <h2>Encontre aqui a viagem dos seus sonhos</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    )
}
export default Home