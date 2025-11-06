import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstScreen.module.css';
import may from "../images/מאי כחלון ראשית.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Popped from '../components/poppedUpWindow/Popped';
import LoadingEffect from '../components/loader/Loader';

gsap.registerPlugin(ScrollTrigger);

const FirstScreen = () => {
  const preHeaderRef = useRef(null);
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) return;

    gsap.fromTo(
      preHeaderRef.current,
      { opacity: 0, y: -50, filter: 'blur(8px)', scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: preHeaderRef.current,
          start: 'top 95%',
        },
      }
    );

    const textElements = textBlockRef.current?.children || [];
    gsap.fromTo(
      textElements,
      { opacity: 0, y: 60, filter: 'blur(4px)', scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -20,
        rotateX: 10,
        filter: 'blur(6px) brightness(0.8)'
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: 'blur(0px) brightness(1)',
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      }
    );

    const button = textBlockRef.current?.querySelector('button');
    if (button) {
      gsap.set(button, { perspective: 1000 });

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          rotateY: 5,
          boxShadow: '0 8px 30px rgba(139, 90, 60, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotateY: 0,
          boxShadow: '0 4px 15px rgba(139, 90, 60, 0.35)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

  }, [imageLoaded]);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // אם התמונה לא נטענה עדיין, הצג רק את הלואדר
  if (!imageLoaded) {
    return (
      <>
        <LoadingEffect />
        {/* תמונה נסתרת לטעינה */}
        <img
          src={may}
          alt="מאי כחלון"
          onLoad={handleImageLoad}
          style={{ display: 'none' }}
        />
      </>
    );
  }

  // אם התמונה נטענה, הצג את כל הקומפוננטה
  return (
    <>
      <div className={styles.preHeader} ref={preHeaderRef}>
        אם תמיד חלמת ללמוד את תחום הביוטי - הדף הזה בשבילך
      </div>
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.textContent} ref={textBlockRef}>
            <div className={styles.title}>
              איך להתחיל ולבסס <span className={styles.boldText}>קריירה רווחית</span> שמכניסה לך מאות
              שקלים בשעה ו<span className={styles.highlightedText}>יומן מלא לקוחות מרוצות</span> חודשים קדימה
            </div>

            <p className={styles.descriptionP}>
              מבלי לבזבז את כל החסכונות או לעצור את החיים שלך, גם אם אין לך ניסיון קודם
            </p>

            <div className={styles.glassContainer}>
              <p className={styles.description}>
                הקורס המקיף והמעשי ביותר בישראל ללימוד ביוטי - עם ליווי אישי צמוד, 
                תרגול מעשי אינטנסיבי, וכל הכלים שצריך כדי להצליח בתחום
              </p>
            </div>

            <button onClick={handleButtonClick} className={styles.ctaButton}>
              לחצי כאן לעוד פרטים
            </button>
          </div>

          <div className={styles.imageWrapper} ref={imageRef}>
            <img
              src={may}
              alt="מאי כחלון"
              className={styles.image}
            />
          </div>
        </div>
      </section>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default FirstScreen;