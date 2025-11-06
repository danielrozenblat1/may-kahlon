import React from 'react';
import styles from './Fits.module.css';
import { 
  FaCoins, 
  FaHeart, 
  FaBaby, 
  FaUnlock, 
  FaRocket, 
  FaClock, 
  FaStar, 
  FaDumbbell,
  FaTimes,
  FaExclamationTriangle,
  FaBan,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import Button from '../button/Button';

const WhoFits = () => {
  // מי מתאים לקורס
  const eligibleList = [
    {
      text: "את רוצה לבנות הכנסה של חמש ספרות בחודש מהבית",
      icon: <FaCoins />
    },
    {
      text: "את מרגישה שתמיד אהבת את תחום היופי ורוצה סוף סוף להפוך את זה למקצוע",
      icon: <FaHeart />
    },
    {
      text: "את אמא שרוצה גמישות, ליהנות מהזמן עם הילדים ולהרוויח בכבוד",
      icon: <FaBaby />
    },
    {
      text: "את חולמת להיות עצמאית ולדעת שהכסף שלך תלוי רק בך",
      icon: <FaUnlock />
    },
    {
      text: "את עייפה מהעבודה כשכירה ורוצה לשנות את המציאות שלך",
      icon: <FaRocket />
    },
    {
      text: "את רוצה לעבוד בשעות שמתאימות לך, לא לפי השעון של אף אחד אחר",
      icon: <FaClock />
    },
    {
      text: "יש לך עין ליופי, סבלנות, ואהבה לגרום לאחרות להרגיש טוב עם עצמן",
      icon: <FaStar />
    },
    {
      text: "יש לך דרייב אמיתי ללמוד ולהצליח בתחום שיכול לשנות לך את החיים",
      icon: <FaDumbbell />
    }
  ];

  // מי לא מתאים לקורס
  const nonEligibleList = [
    {
      text: "את מחפשת כסף קל בלי רצון אמיתי ללמוד מקצוע",
      icon: <FaTimes />
    },
    {
      text: "את לא אוהבת לעבוד עם אנשים ולא אכפת לך מהלקוחות",
      icon: <FaExclamationTriangle />
    },
    {
      text: "את מצפה לתוצאות בלי להשקיע זמן, התמדה ואהבה למה שאת עושה",
      icon: <FaBan />
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>למי הקורס מתאים?</h2>
        <p className={styles.subtitle}>גלי אם זה בשבילך ותתחילי את הצעד הראשון לעצמאות שלך</p>
      </div>
      
      <div className={styles.cardsWrapper}>
        {/* Suitable Section */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>הקורס מושלם עבורך אם...</h3>
            <div className={styles.badge}>
              <FaCheckCircle className={styles.badgeIcon} />
            </div>
          </div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Suitable Section */}
        <div className={`${styles.card} ${styles.cardNegative}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>הקורס לא בשבילך אם...</h3>
            <div className={`${styles.badge} ${styles.badgeNegative}`}>
              <FaTimesCircle className={styles.badgeIcon} />
            </div>
          </div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={`${styles.listItem} ${styles.listItemNegative}`}>
                <div className={`${styles.iconWrapper} ${styles.iconWrapperNegative}`}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.ctaBox}>
        <p className={styles.ctaText}>
          אם את מזהה את עצמך כאן, זה הזמן שלך לקחת צעד אחד קדימה ולהתחיל דרך חדשה
        </p>
        <Button text="תלחצי כאן ואנחנו מדברות!" />
      </div>
    </div>
  );
};

export default WhoFits;
