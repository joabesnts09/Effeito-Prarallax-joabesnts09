// import styles from './styles.module.scss'
import github_icon from '../../assets/github-icon.svg'
import whatsapp_icon from '../../assets/whatsapp-icon.svg'
import linkedin_icon from '../../assets/linkedin-icon.svg'

export const Footer = () => {

    return (
        <footer>
            <div>
                <div>
                    <h3>contatos</h3>
                    <div>
                        <a href={whatsapp_icon}>Whatsapp</a>
                        <a href={linkedin_icon}>Linkdin</a>
                        <a href={github_icon}>GitHub</a>
                    </div>
                </div>

                <div>
                    <h4>
                        Todos os direitos resevados a - <span>Joabe Santos </span> 
                    </h4>
                </div>
            </div>
        </footer>
    )
}