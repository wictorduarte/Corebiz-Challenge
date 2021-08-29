// Componente usado para reconstruir
// a seção de frameworks do site da Corebiz

import React, { useState } from "react"
import FrameworkIntro from "./TextBlocks/FrameworkIntro"
import OmniChannel from "./TextBlocks/OmniChannel"
import Performance from "./TextBlocks/Performance"
import Conversao from "./TextBlocks/Conversao"
import Upgrade from "./TextBlocks/Upgrade"
import styles from "./styles.css"

const CorebizFramework = () => {
  const [hovered, setHovered] = useState(false);
  const [visibleDiv, setVisibleDiv] = useState(0);
  const handleHover = (frameworkCircle: number) => {
    setHovered(true);
    setVisibleDiv(frameworkCircle)
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexColumn}>
        <h1 className={styles.mainTitle}>nosso framework de transformação digital.</h1>
        {(visibleDiv === 0) ? <FrameworkIntro /> : ""}
        {(hovered && visibleDiv === 1) ? <OmniChannel /> : ""}
        {(hovered && visibleDiv === 3) ? <Performance /> : ""}
        {(hovered && visibleDiv === 4) ? <Conversao /> : ""}
        {(hovered && visibleDiv === 5) ? <Upgrade /> : ""}
      </div>

      <div className={styles.frameworkDesktop}>
        <div
          className={[styles.frameworkCircle, styles.frameworkCircleOne].join(" ")}
          onMouseOver={() => handleHover(1)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>Technology</p>
          <p>Ongoing &amp; Channel Evolution</p>
        </div>

        <div
          className={[styles.frameworkCircle, styles.frameworkCircleTwo].join(" ")}
          onMouseOver={() => handleHover(1)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>Accelerators</p>
          <p>OmniChannel<br />products</p>
        </div>

        <div
          className={[styles.frameworkCircle, styles.frameworkCircleThree].join(" ")}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>Performance &amp;<br />Digital Mkt</p>
          <p>Digital<br />Production</p>
        </div>

        <div
          className={[styles.frameworkCircle, styles.frameworkCircleFour].join(" ")}
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>BI &amp; Data<br />Analytics</p>
          <p>Conversion<br />Rate &amp; Journeys</p>
        </div>

        <div
          className={[styles.frameworkCircle, styles.frameworkCircleFive].join(" ")}
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>Platform<br />Implementation</p>
          <p>Data Driven<br />Experience</p>
        </div>

        <div
          className={[styles.frameworkCircle, styles.frameworkCircleSix].join(" ")}
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={() => { handleHover(0); setHovered(false) }}
        >
          <p>consulting</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default CorebizFramework
