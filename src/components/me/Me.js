import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import maiPhoto from "../../images/מאי כחלון ראשית 4.png"; 
import ScrollReveal from 'scrollreveal';
import Works from '../recommends/Works';
import Rissim from '../recommends/Rissim';
import Nano from '../recommends/Nano';
import Gabot from '../recommends/Gabot';

const AboutMe = () => {
  const containerRef = useRef(null);

  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, { 
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      if (ScrollReveal().isInitialized) { 
        ScrollReveal().destroy();
      }
    };
  }, []);

  // Handle button click to navigate to form
  const handleFormNavigation = () => {
    const formElement = document.getElementById('טופס'); 
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={maiPhoto} alt="מאי כחלון" className={styles.image} /> 
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים להכיר, מאי כחלון</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "הפעם הראשונה בחיי שעשיתי משהו בשביל עצמי הייתה כשעזבתי את 'המסגרת הבטוחה' - וזו ההחלטה הכי טובה שעשיתי. ואני פה כדי להראות לך שזה אפשרי גם עבורך."
              </p>
            </div>

            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                גם אני הייתי שם. עבדתי לילות כימים בתור ברמנית, למדתי הנהלת חשבונות "מסודרת" - ופשוט הבנתי שזה לא הדרך שלי. הייתי צריכה לעשות שינוי אמיתי.
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                תחום הביוטי והגבות היה תמיד נוכח בחיים שלי מהילדות ועד הצבא כשהייתי מסתובבת עם חוט ועושה שפם לכולן.. יום אחד החלטתי שאני רוצה ללמוד את התחום קצת יותר לעומק, ומשם - הכל השתנה.
              </p>
              
              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                לראשונה בחיים, הרגשתי שאני שולטת על הזמן שלי. על ההכנסה שלי. על החיים שלי. הלקוחות התחילו לחזור, הכנסה של חמש ספרות בחודש פתאום הייתה לא רק חלום - והדבר הכי מטורף? יצאתי מהבית והשכרתי מקום משלי. משהו שנראה לי בלתי אפשרי רק כמה שנים קודם.
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                אבל בדרך, עברתי לא מעט קורסים מתסכלים. יצאתי עם שאלות פתוחות, בלי ביטחון, ובלי מושג איך באמת להצליח. וזה מה שגרם לי להבין - אם אני כבר פה, אני חייבת להעביר את זה הלאה - אבל בצורה שבאמת תעבור נכון
              </p>

              <div className={styles.divider}></div>
            <p className={styles.paragraph}>
            הקורסים שלי בקבוצות קטנות וכל תלמידה מקבלת יחס אישי ומענה לכל שאלה גם אחרי שהקורס נגמר - מי שבאה אלי לא יוצאת רק עם ידע, היא יוצאת מוכנה להצלחה בתחום! 
              </p>

              <div className={styles.divider}></div>
              <p className={styles.finalText}>
           החלטה אחת שינתה לי את החיים ואני יודעת שהיא יכולה לשנות גם את החיים שלך
              </p>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleFormNavigation}
            >
              <span className={styles.buttonIcon}>💬</span>
              המסע שלנו מתחיל בלחיצה כאן
            </button>
          </div>
        </div>
      </section>

      <Rissim/>
      <Nano/>
      <Gabot/>
    </>
  );
};

export default AboutMe;