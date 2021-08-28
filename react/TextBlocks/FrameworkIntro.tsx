import React from "react"
import styles from "../styles.css"

const FrameworkIntro = () => {
    return (
        <>
            <div className={styles.frameworkTextIntro}>
                <p>A Corebiz atua em toda jornada digital do usuário. Desde a configuração de plataformas, implementações e integrações, até a entrega de uma excelente experiência de consumo.</p>
                <p>Juntamente com toda a equipe de marketing trabalhando para uma melhor performance digital, o que qualifica ainda mais a entrega da jornada do usuário.</p>
            </div>

            <div className={styles.frameworkTextDiscover}>
                <p>Veja ao lado nosso framework</p>
                <span>Passe o mouse para saber mais:</span>
            </div>
            <div className={styles.frameworkBusinessUnits}>
                <h3 className={styles.secondaryTitle}>business units</h3>
                <ul>
                    <li>experience</li>
                    <li>technology</li>
                    <li>marketing</li>
                </ul>
            </div>

        </>
    )
}

export default FrameworkIntro