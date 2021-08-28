import React from "react";
import styles from "../styles.css"

const Upgrade = () => {
    return (
        <div className={styles.frameworkInfo}>
            <h3 className={[styles.frameworkTitle, styles.frameworkFiveTitle].join(" ")}>
                Começando ou fazendo upgrade do seu canal de vendas
            </h3>
            <div className={styles.frameworkText}>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Consulting
                    </h4>
                    <ul>
                        <li>. Platform evaluation</li>
                        <li>. Technology evalutation</li>
                        <li>. Omninchannel mapping</li>
                        <li>. Experience definition</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Data Driven Experience
                    </h4>
                    <ul>
                        <li>. User-centered design</li>
                        <li>. Customer-centric design</li>
                        <li>. User research &amp; site analytics</li>
                        <li>. Persona &amp; scenario modeling</li>
                        <li>. Information architecture</li>
                        <li>. Wireframing &amp; prototyping</li>
                        <li>. Heuristic Evaluation</li>
                        <li>. Website accessibility</li>
                        <li>. Concept development</li>
                        <li>. Interactive design</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Platform Implementation
                    </h4>
                    <ul>
                        <li>. Systems integrator for Vtex, Magento &amp; Hybris</li>
                        <li>. B2C and B2B implementations</li>
                        <li>. Technical roadmaps and platform assessments</li>
                        <li>. Integration with ERP, OMS and CRM systems</li>
                        <li>. Configuration and integrations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Upgrade


