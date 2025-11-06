import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  TrendingUp, 
  DollarSign,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import styles from './After.module.css';
import Button from '../button/Button';

// ייבוא תמונות של עבודות תלמידות
import image1 from '../../images/מאי כחלון עבודות של תלמידות 1.png';
import image2 from '../../images/מאי כחלון עבודות של תלמידות 2.png';
import image3 from '../../images/מאי כחלון עבודות של תלמידות 3.png';
import image4 from '../../images/מאי כחלון עבודות של תלמידות 4.png';

gsap.registerPlugin(ScrollTrigger);

const EarningsCalculator = () => {
  const containerRef = useRef(null);
  const [treatments, setTreatments] = useState(50);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // חישוב הכנסות
  const pricePerTreatment = 250; // ₪250 לטיפול
  const monthlyIncome = treatments * pricePerTreatment;

  const whatsappNumber = "+972544884729";
  const whatsappMessage = "היי מאי! ראיתי את המחשבון, אשמח לדבר איתך על הקורס 💅";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[\s-]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // אנימציות כניסה
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(
      `.${styles.topTitle}`,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      `.${styles.mainTitle}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(
      `.${styles.subtitle}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      `.${styles.calculatorCard}`,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.6'
    );

    // אנימציית Before/After
    gsap.fromTo(
      `.${styles.comparisonSection}`,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.comparisonSection}`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSliderChange = (e) => {
    setTreatments(parseInt(e.target.value));
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 300);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {/* אלמנטים דקורטיביים בעדינות */}


      {/* כותרת ראשית עליונה */}


      {/* כותרת משנית */}
      <motion.div className={styles.header}>
        <h2 className={styles.practicalTitle}>
          "אז רגע מאי, כמה אפשר להרוויח מעיצוב גבות?"
        </h2>
        <p className={styles.subtitle}>
          תכניסי את מספר הטיפולים החודשיים ותביני לאילו רמות הכנסה את יכולה להגיע
        </p>
      </motion.div>

      {/* כרטיס המחשבון */}
      <motion.div 
        className={styles.calculatorCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.sliderSection}>
          <label className={styles.sliderLabel}>
            <span>מספר טיפולים בחודש</span>
            <span className={styles.treatmentCount}>{treatments}</span>
          </label>
          
          <div className={styles.sliderWrapper}>
            <input
              type="range"
              min="10"
              max="200"
              value={treatments}
              onChange={handleSliderChange}
              className={styles.slider}
              style={{
                background: `linear-gradient(to left, #c9a876 0%, #c9a876 ${((treatments - 10) / 190) * 100}%, #e8e4de ${((treatments - 10) / 190) * 100}%, #e8e4de 100%)`
              }}
            />
            <div className={styles.sliderMarkers}>
              <span>10</span>
              <span>50</span>
              <span>100</span>
              <span>150</span>
              <span>200</span>
            </div>
          </div>
        </div>

        {/* תוצאות */}
        <motion.div 
          className={styles.resultsGrid}
          animate={isCalculating ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.resultCard}>
            <DollarSign className={styles.resultIcon} size={24} />
            <div className={styles.resultContent}>
              <span className={styles.resultLabel}>הכנסה חודשית</span>
              <span className={styles.resultValue}>₪{monthlyIncome.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>

        <p className={styles.calculatorNote}>
          * חישוב על בסיס ממוצע של ₪250 לטיפול
        </p>
      </motion.div>

      {/* כפתור פעולה - מחוץ למחשבון */}
      <motion.div 
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
    <Button text="לבדיקת התאמה לחצי כאן"/>
      </motion.div>

      {/* שאלה - אז כמה הקורס פרקטי? */}
      <motion.div className={styles.practicalSection}>
        <h3 className={styles.practicalTitle}>
          ״וכמה הקורס באמת פרקטי?״
        </h3>
        <p className={styles.practicalSubtitle}>
          הנה עבודות אמיתיות של תלמידות שלי כבר בקורס
        </p>
      </motion.div>

      {/* Students Work Gallery */}
      <div className={styles.comparisonSection}>
        <div className={styles.galleryGrid}>
          {/* Work 1 */}
          <motion.div 
            className={styles.imageCard}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={image1} alt="עבודה של תלמידה 1" className={styles.workImage} />
            </div>
          </motion.div>

          {/* Work 2 */}
          <motion.div 
            className={styles.imageCard}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={image2} alt="עבודה של תלמידה 2" className={styles.workImage} />
            </div>
          </motion.div>

          {/* Work 3 */}
          <motion.div 
            className={styles.imageCard}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={image3} alt="עבודה של תלמידה 3" className={styles.workImage} />
            </div>
          </motion.div>

          {/* Work 4 */}
          <motion.div 
            className={styles.imageCard}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={image4} alt="עבודה של תלמידה 4" className={styles.workImage} />
            </div>
          </motion.div>
        </div>

        <motion.p 
          className={styles.comparisonNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          זו יכולה להיות את..
        </motion.p>

        <motion.p 
          className={styles.decisionText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          כל מה שמפריד בינך לבין החלום שלך זו החלטה אחת קטנה<br />
          אז כדי להבין אם התחום באמת מתאים לך תלחצי על הכפתור שלמטה ונבדוק יחד
        </motion.p>

           <motion.div 
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
    <Button text="לבדיקת התאמה לחצי כאן"/>
      </motion.div>
      </div>
    </div>
  );
};

export default EarningsCalculator;