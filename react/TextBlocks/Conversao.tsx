import React from "react";
import styles from "../styles.css"

const Conversao = () => {
    return (
        <div className={styles.frameworkInfo}>
            <h3 className={[styles.frameworkTitle, styles.frameworkFourTitle].join(" ")}>
                Aumente a taxa de conversão
            </h3>
            <div className={styles.frameworkText}>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        BI &amp; Data Analytics
                    </h4>
                    <ul>
                        <li>. Integrations PowerBI x Plataforms</li>
                        <li>. Conversion funnel analysis</li>
                        <li>. KPI specific dashboards &amp; custom reports</li>
                        <li>. Monthly analysis, reporting and recommendations</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Customer Journey Optimization
                    </h4>
                    <ul>
                        <li>. User Experience audit</li>
                        <li>. A/B &amp; MV testing</li>
                        <li>. Conversion funnel analysis</li>
                        <li>. Competitive intelligence</li>
                        <li>. Heatmap implementation &amp; analysis</li>
                        <li>. User testing</li>
                        <li>. Heuristic Evaluation</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Ongoin &amp; Channel Evolution
                    </h4>
                    <ul>
                        <li>. Front-End Development</li>
                        <li>. Vtex development</li>
                        <li>. Magento development</li>
                        <li>. Plataform extensions</li>
                        <li>. Technical assistance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Conversao


