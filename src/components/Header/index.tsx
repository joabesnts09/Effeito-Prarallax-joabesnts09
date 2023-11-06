 import logo from '../../assets/logo.png'
 import IconGitHub from '../../assets/icon-GitHub.png'
 import styles from './style.module.scss'

export const Header = () => {

    return (
        <header className={styles.container}>
            <div>
                <img src={logo} alt='Logo' />

                <a href="">Acessar Repositótio <img src={IconGitHub} alt="icon github" /></a>
            </div>
        </header>
    )
}