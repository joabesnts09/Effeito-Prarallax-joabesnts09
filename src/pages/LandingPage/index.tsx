import { EffectParallax } from "../../components/EffectParallax"
import { Header } from "../../components/Header"
import styles from './style.module.scss'

export const LandingPage = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <EffectParallax/>
        </div>
    )
}