 import logo from '../../assets/logo.png'
 import github_icon from '../../assets/github-icon.svg'
 import styles from './style.module.scss'

export const Header = () => {

    return (
        <header className={styles.container}>
            <div>
                <img src={logo} alt='Logo' />

                <a href="https://github.com/joabesnts09/Effeito-Prarallax-joabesnts09" target='_blank"'><span>Acessar</span> Repositótio <img src={github_icon} alt="icon github" /></a>
            </div>
        </header>
    )
}