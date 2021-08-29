import React from "react";
import styles from "../styles.css"

const OmniChannel = () => {
    return (
        <div className={styles.frameworkInfo}>
            <h3 className={[styles.frameworkTitle, styles.frameworkOneTitle].join(" ")}>
                Projetos OmniChannel
            </h3>
            <div className={styles.frameworkText}>
                <div>
                    <h4 className={styles.frameworkTopic}>
                        Accelerators
                    </h4>
                    <ul>
                        <li>. Magento 2 Accelerator</li>
                        <li>. Vtex Accelerator</li>
                        <li>. SalesForce Marketing Cloud with Magento &amp; Vtex</li>
                    </ul>
                </div>

                <div>
                    <h4 className={styles.frameworkTopic}>
                        OmniChannel products
                    </h4>
                    <ul>
                        <li>. Ecommerce app IOS Android</li>
                        <li>. Grocery app IOS Android</li>
                        <li>. Franshising app IOS Android</li>
                        <li>. Online2Store</li>
                    </ul>
                </div>

                <div>
                    <h4 className={styles.frameworkTopic}>
                        Technology
                    </h4>
                    <ul>
                        <li>. CMS configuration and implementation:</li>
                        <li>. Adobe</li>
                        <li>. Microsoft Sharepoint</li>
                        <li>. Drupal</li>
                        <li>. WordPress</li>
                        <li>. Custom App development for iOS, Android</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OmniChannel