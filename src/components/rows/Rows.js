import React, { useRef, useEffect } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import styles from './Rows.module.css';
import learn from "../../icons/wired-outline-406-study-graduation-hover-pinch (4).json";

const ServicesSection = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    [playerRef1, playerRef2, playerRef3, playerRef4].forEach(ref => {
      ref?.current?.playFromBeginning();
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.card}`, {
      duration: 1000,
      distance: "60px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 0.9,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {/* כרטיס 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Player
                icon={learn}
                ref={playerRef1}
                size="100%"
                onComplete={() => handleComplete(playerRef1)}
              />
            </div>
            <p className={styles.cardText}>
              תוכלי להכניס סכומים שפעם נראו לך בלתי אפשריים, ולראות איך כל מאמץ שלך מתגמל אותך ישירות.
            </p>
          </div>

          {/* Divider 1 */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerGlow}></div>
          </div>

          {/* כרטיס 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Player
                icon={learn}
                ref={playerRef2}
                size="100%"
                onComplete={() => handleComplete(playerRef2)}
              />
            </div>
            <p className={styles.cardText}>
              שעת העבודה שלך תהיה שווה הרבה יותר מהמינימום, כי את קובעת את הערך שלך.
            </p>
          </div>

          {/* Divider 2 */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerGlow}></div>
          </div>

          {/* כרטיס 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Player
                icon={learn}
                ref={playerRef3}
                size="100%"
                onComplete={() => handleComplete(playerRef3)}
              />
            </div>
            <p className={styles.cardText}>
              תחליטי מתי לעבוד וכמה לעבוד, בלי בוס על הראש ובלי תלות באף אחד.
            </p>
          </div>

          {/* Divider 3 */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerGlow}></div>
          </div>

          {/* כרטיס 4 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Player
                icon={learn}
                ref={playerRef4}
                size="100%"
                onComplete={() => handleComplete(playerRef4)}
              />
            </div>
            <p className={styles.cardText}>
              תקומי כל בוקר בכיף, כשאת עושה את מה שאת אוהבת ומתפרנסת מהתשוקה שלך.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;