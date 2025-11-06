import React, { useEffect, useRef } from 'react';
import needle from "../../icons/wired-outline-406-study-graduation-hover-pinch (4).json";
import work from "../../icons/wired-outline-406-study-graduation-hover-pinch (4).json";
import laser from "../../icons/wired-outline-775-needle-hover-pinch (5).json";
import free from "../../icons/wired-outline-775-needle-hover-pinch (5).json";
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from "@lordicon/react";

const VerticalIconCard = ({ text, icon }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Player
          icon={icon}
          ref={playerRef1}
          size="100%"
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const BenefitsContainer = () => {
  const benefits = [
    {
      icon: needle,
      text: "תוכלי להכניס סכומים שפעם נראו לך בלתי אפשריים (הרבה מעל המינימום)."
    },
    {
      icon: work,
      text: "תוכלי לבחור כמה לעבוד ומתי בלי מסגרת שעות קבועה"
    },
    {
      icon: laser,
      text: "תהפכי לבוס של עצמך! בלי בוס אחר על הראש ובלי תלות באף אחד."
    },
    {
      icon: free,
      text: "תקומי כל בוקר בהגשמה עצמית, כשאת עושה את מה שאת אוהבת ומתפרנסת מהתשוקה שלך."
    }
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard
          key={index}
          text={benefit.text}
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };