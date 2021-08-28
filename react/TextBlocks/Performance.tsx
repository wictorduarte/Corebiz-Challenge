import React from "react";
import styles from "../styles.css"

const Performance = () => {
    return (
        <div className={styles.frameworkInfo}>
            <h3 className={[styles.frameworkTitle, styles.frameworkThreeTitle].join(" ")}>
                Marketing de Performance
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
                        Digital Production
                    </h4>
                    <ul>
                        <li>. Creative</li>
                        <li>. Design System</li>
                        <li>. Copywriting</li>
                        <li>. Digital production</li>
                        <li>. Motion graphics &amp; VFX</li>
                        <li>. Pre media production</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Performance &amp; Digital Mkt
                    </h4>
                    <ul>
                        <li>. PPC, Google shopping, Faceads</li>
                        <li>. Search Engine Optimization</li>
                        <li>. Affiliate Networks</li>
                        <li>. Off-page Support</li>
                        <li>. Email Strategy and execution</li>
                        <li>. Online Shopping Channel Management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Performance