import React, { useState, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Timeline.module.css';
import Button from '../button/Button';

import faith from "../../icons/wired-outline-406-study-graduation-hover-pinch (4).json"
import again from "../../icons/wired-outline-406-study-graduation-hover-pinch (4).json"
import keep from "../../icons/wired-outline-775-needle-hover-pinch (5).json"

export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);
  const playerRefs = useRef([]);

  const items = [
    {
      icon: faith,
      title: "אמונה בעצמך",
      description:
        "גם כשבהתחלה זה לוקח זמן ואת עדיין בונה את עצמך ואת השם שלך - חשוב להמשיך להאמין בעצמך ולא לעצור.  כשאת מאמינה בעצמך למרות הקשיים בדרך, את בונה ביטחון של ווינרית שלא מוותרת!",
    },
    {
      icon: again,
      title: "תרגול ושירותיות",
      description:
        "תרגול יומיומי הופך כל תנועה לטבעית וכל עבודה למושלמת. עבודה נכונה מהלב יכולה לשנות ללקוחה את כל הפנים ולהרים לה את הביטחון העצמי. ככל שתהיי יותר מדויקת ושירותית, יותר נשים יבואו אלייך וישלמו לך יותר - והמקום לעולם לא נגמר!",
    },
    {
      icon: keep,
      title: "דרייב והתמדה",
      description:
      "התמדה ונחישות הן המפתח להצלחה! יהיו ימים פחות טובים ושם בדיוק יהיה המבחן שלך - דווקא בימים הקשים חשוב להתמיד כדי לצבור את הלקוחות ולבנות את העסק. ככל שתתמידי יותר, השם שלך יתחיל לעבור מאוזן לאוזן וברשתות, והיומן שלך יתמלא עם לקוחות חוזרות שהופכות לשגרירות שלך!",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startPoint = windowHeight * 0.7;
      const endPoint = windowHeight * 0.3;

      if (elementTop > startPoint) {
        setProgress(0);
      } else if (elementTop + elementHeight < endPoint) {
        setProgress(100);
      } else {
        const scrolled = startPoint - elementTop;
        const total = elementHeight + (startPoint - endPoint);
        const percentage = (scrolled / total) * 100;
        setProgress(Math.min(Math.max(percentage, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComplete = (index) => {
    setTimeout(() => {
      playerRefs.current[index]?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.lineBackground} />
          <div className={styles.lineProgress} style={{ height: `${progress}%` }} />

          <div className={styles.itemsContainer}>
            {items.map((item, index) => {
              const itemProgress = Math.min(Math.max((progress - index * 25) * 4, 0), 100);
              const isActive = itemProgress > 0;

              return (
                <div key={index} className={styles.item}>
                  <div className={`${styles.circle} ${isActive ? styles.circleActive : ''}`}>
                    <div className={styles.iconWrapper}>
                      <Player
                        icon={item.icon}
                        ref={(el) => (playerRefs.current[index] = el)}
                        size="100%"
                        colorize="black"
                        onComplete={() => handleComplete(index)}
                      />
                    </div>
                    {isActive && itemProgress > 50 && <div className={styles.pulse} />}
                  </div>

                  <div
                    className={`${styles.content} ${isActive ? styles.contentActive : ''}`}
                    style={{
                      transform: `translateX(${isActive ? 0 : 40}px)`,
                      opacity: isActive ? 1 : 0.25,
                    }}
                  >
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Button text="יש לי את זה, בואי נתחיל" />
    </div>
  );
}