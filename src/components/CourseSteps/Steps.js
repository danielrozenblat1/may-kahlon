import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import ScrollReveal from 'scrollreveal';
import { 
  Sparkles, 
  Eye, 
  Scale, 
  Scan, 
  PenTool, 
  Palette, 
  Layers, 
  Users, 
  Camera,
  Play,
  GraduationCap,
  Briefcase,
  Award,
  Gift,
  Zap 
} from 'lucide-react';
import styles from './Steps.module.css';

gsap.registerPlugin(ScrollTrigger);

// קומפוננטת כפתור ההרשמה
const RegisterButton = ({ phoneNumber, message }) => {
  const buttonRef = useRef(null);
  
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[\s-]/g, '')}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // אנימציה לכניסת הכפתור עם ScrollReveal
    ScrollReveal().reveal(buttonRef.current, {
      duration: 1200,
      distance: '30px',
      origin: 'bottom',
      opacity: 0,
      scale: 0.9,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      delay: 200,
      afterReveal: (el) => {
        // אפקט רטט קל אחרי הכניסה
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.1,
          repeat: 3,
          yoyo: true,
          ease: 'sine.inOut',
          scale: 1.05,
          clearProps: 'scale',
          stagger: 0.05,
        });
      }
    });
  }, []);

  return (
    <a 
      ref={buttonRef} 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.registerButton}
    >
      <Zap className={styles.buttonIcon} size={20} strokeWidth={2} />
      <span>להרשמה לקורס לחצי כאן</span>
    </a>
  );
};

const EyebrowCourseJourney = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
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

    // ScrollReveal configuration
    const sr = ScrollReveal({
      duration: 1200,
      distance: '50px',
      opacity: 0,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      reset: false,
      mobile: true,
      cleanup: true,
    });

    // אנימציה לכרטיסים עם ScrollReveal במקום scrub
    sr.reveal(`.${styles.sessionCard}`, {
      interval: 150,
      origin: 'bottom',
      scale: 0.95,
    });

    // אנימציה למספרים הגדולים עם ScrollReveal
    sr.reveal(`.${styles.bigNumber}`, {
      duration: 1500,
      scale: 0.8,
      opacity: 0,
      easing: 'ease-out',
    });

    // אנימציה לאייטמים ברשימה עם ScrollReveal
    sr.reveal(`.${styles.item}`, {
      interval: 50,
      origin: 'right',
      distance: '30px',
      scale: 0.98,
    });

    // אנימציה לכרטיס הבונוס
    sr.reveal(`.${styles.bonusCard}`, {
      duration: 1000,
      scale: 0.95,
      origin: 'bottom',
    });

    return () => {
      lenis.destroy();
      sr.destroy();
    };
  }, []);

  const session1Items = [
    { text: 'לימוד עיוני', icon: Sparkles },
    { text: 'הכרת הטכניקה של עיצוב גבות', icon: Eye },
    { text: 'יתרונות וחסרונות: חוט, שעווה, פינצטה', icon: Scale },
    { text: 'אבחון סוג העור', icon: Scan },
    { text: 'שרטוט צורה מושלמת', icon: PenTool },
    { text: 'צביעה ומילוי גבות', icon: Palette },
    { text: 'שלבי העבודה והמוצרים', icon: Layers },
    { text: 'עיצוב גבות לגברים', icon: Users },
    { text: 'צילום ושיווק דיגיטלי', icon: Camera },
  ];

  const session2Items = [
    { text: 'צפייה מלאה בטיפול', icon: Play },
    { text: 'תרגול על 2 מודליסטיות', icon: GraduationCap },
    { text: 'הכנה לפתיחת עסק', icon: Briefcase },
    { text: 'קבלת תעודת הסמכה', icon: Award },
  ];

  const whatsappNumber = "+972544884729";
  const whatsappMessage = "היי מאי הגעתי מהדף שלך, אשמח לשמוע עוד על הקורס";

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Curved SVG Path */}
      <svg className={styles.pathSvg} viewBox="0 0 100 800" preserveAspectRatio="none">
        <motion.path
          ref={pathRef}
          d="M 50,0 Q 20,200 50,400 T 50,800"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="0.5"
          strokeDasharray="0 1"
          style={{
            pathLength: pathLength,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(201, 168, 118, 0)" />
            <stop offset="20%" stopColor="rgba(201, 168, 118, 0.4)" />
            <stop offset="50%" stopColor="rgba(201, 168, 118, 0.6)" />
            <stop offset="80%" stopColor="rgba(201, 168, 118, 0.4)" />
            <stop offset="100%" stopColor="rgba(201, 168, 118, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Session 1 */}
      <div className={styles.sessionWrapper}>
        <div className={styles.bigNumber}>01</div>
        <div className={styles.sessionCard}>
          <div className={styles.sessionHeader}>
            <span className={styles.sessionNum}>01</span>
            <h3 className={styles.sessionTitle}>מפגש ראשון</h3>
          </div>
          
          <ul className={styles.itemsList}>
            {session1Items.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <li key={i} className={styles.item}>
                  <IconComponent className={styles.itemIcon} size={18} strokeWidth={1.5} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Session 2 */}
      <div className={styles.sessionWrapper}>
        <div className={styles.bigNumber}>02</div>
        <div className={styles.sessionCard}>
          <div className={styles.sessionHeader}>
            <span className={styles.sessionNum}>02</span>
            <h3 className={styles.sessionTitle}>מפגש שני</h3>
          </div>
          
          <ul className={styles.itemsList}>
            {session2Items.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <li key={i} className={styles.item}>
                  <IconComponent className={styles.itemIcon} size={18} strokeWidth={1.5} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bonus */}
      <div className={styles.bonusCard}>
        <Gift className={styles.bonusIcon} size={24} strokeWidth={1.5} />
        <p className={styles.bonusText}>
          בסיום הקורס תקבלי <span className={styles.highlight}>תעודת הסמכה</span> + <span className={styles.highlight}>ערכה מקצועית מלאה</span>
        </p>
      </div>
      
      {/* Register Button */}
      <div className={styles.buttonWrapper}>
        <RegisterButton 
          phoneNumber={whatsappNumber}
          message={whatsappMessage}
        />
      </div>

    </div>
  );
};

export default EyebrowCourseJourney;