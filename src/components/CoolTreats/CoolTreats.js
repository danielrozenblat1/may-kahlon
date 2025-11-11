import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  CheckCircle2,
  Eye,
  Sparkles,
  Zap,
  Heart,
  X,
} from 'lucide-react';
import styles from './CoolTreats.module.css';
import Button from '../button/Button';

// Import images for עיצוב גבות טבעיות
import eyebrows1 from "../../images/מאי כחלון עיצוב גבות טבעיות 1.png";
import eyebrows2 from "../../images/מאי כחלון עיצוב גבות טבעיות 2.png";
import eyebrows3 from "../../images/מאי כחלון עיצוב גבות טבעיות 3.png";
import eyebrows4 from "../../images/מאי כחלון עיצוב גבות טבעיות 4.png";
import eyebrows5 from "../../images/מאי כחלון עיצוב גבות טבעיות 5.png";

// Import images for הרמת ריסים
import lashLift1 from "../../images/מאי כחלון הרמת ריסים 1.png";
import lashLift2 from "../../images/מאי כחלון הרמת ריסים 2.png";
import lashLift3 from "../../images/מאי כחלון הרמת ריסים 3.png";
import lashLift5 from "../../images/מאי כחלון הרמת ריסים 5.png";
import lashLift7 from "../../images/מאי כחלון הרמת ריסים 7.png";

// Import images for הדבקת ריסים
import lashExtension1 from "../../images/מאי כחלון הדבקת ריסים 1.png";
import lashExtension2 from "../../images/מאי כחלון הדבקת ריסים 2.png";
import lashExtensionBA1 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 1.png";
import lashExtensionBA2 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 2.png";
import lashExtensionBA3 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 3.png";
import lashExtensionBA4 from "../../images/מאי כחלון הדבקת ריסים תמונה ראשית.png";
// Import images for נאנובליידינג (איפור קבוע)
import nanoblading1 from "../../images/מאי כחלון נאנובליידינג 1.png";
import nanoblading2 from "../../images/מאי כחלון נאנובליידינג 2.png";
import nanoblading3 from "../../images/מאי כחלון נאנובליידינג 3.png";
import nanoblading4 from "../../images/מאי כחלון נאנובליידינג 4.png";
import nanoblading5 from "../../images/מאי כחלון נאנובליידינג 5.png";
import nanoblading6 from "../../images/מאי כחלון נאנובליידינג 16.png";
import nanoblading9 from "../../images/מאי כחלון נאנובליידינג 9.png";
import nanoblading7 from "../../images/מאי כחלון נאנובליידינג 7.png";
import nanoblading8 from "../../images/מאי כחלון נאנובליידינג 8.png";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    id: 1,
    name: 'עיצוב גבות טבעיות',
    icon: Eye,
    color: '#c9a876',
    mainImage: eyebrows1,
    galleryImages: [eyebrows2, eyebrows3, eyebrows4, eyebrows5],
    suitableFor: [
      'נשים המעוניינות במראה טבעי ומושלם',
      'בעלות גבות דלילות או לא סימטריות',
      'מי שמחפשות פתרון ארוך טווח',
      'נשים בכל גיל המעוניינות בשדרוג מיידי'
    ],
    problemsSolved: [
      'גבות לא סימטריות ולא מעוצבות',
      'שיער עודף שמסתיר את צורת הגבה',
      'גבות דלילות שצריכות מילוי וצביעה',
      'צורת גבה לא מתאימה למבנה הפנים',
      'פערים וחוסרים בקו הגבה'
    ]
  },
  {
    id: 2,
    name: 'הרמת ריסים',
    icon: Sparkles,
    color: '#b89968',
    mainImage: lashLift2,
    galleryImages: [lashLift1, lashLift2, lashLift3, lashLift5, lashLift7],
    suitableFor: [
      'בעלות ריסים ישרים או נפולים',
      'מי שמחפשות חלופה לתוספות ריסים',
      'נשים עם אורח חיים פעיל',
      'מי שרוצות מראה טבעי ומרומם'
    ],
    problemsSolved: [
      'ריסים ישרים שלא מדגישים את העין',
      'חוסר סלסול וכיפוף טבעי',
      'ריסים נפולים כלפי מטה',
      'צורך בסלסול יומיומי במסקרה',
      'ריסים שלא שומרים על צורה'
    ]
  },
  {
    id: 3,
    name: 'הדבקת ריסים',
    icon: Zap,
    color: '#d4b896',
    mainImage: lashExtensionBA4,
    galleryImages: [lashExtension2,lashExtension1, lashExtensionBA1, lashExtensionBA2, lashExtensionBA3,lashExtensionBA4],
    suitableFor: [
      'מי שרוצות ריסים ארוכים ומרשימים',
      'נשים לקראת אירוע מיוחד',
      'בעלות ריסים דלילים',
      'מי שחולמות על מבט דרמטי וטבעי'
    ],
    problemsSolved: [
      'ריסים קצרים ודלילים',
      'חוסר נפח ועובי בריסים',
      'חוסר אורך משמעותי',
      'ריסים בלתי אחידים',
      'צורך במסקרה כבדה לתוצאה בולטת'
    ]
  },
  {
    id: 4,
    name: 'איפור קבוע - נאנובליידינג',
    icon: Heart,
    color: '#e8c9a8',
    mainImage: nanoblading6,
    galleryImages: [nanoblading1, nanoblading2, nanoblading3, nanoblading4, nanoblading5, nanoblading6, nanoblading7, nanoblading8, nanoblading9],
    suitableFor: [
      'נשים המעוניינות במראה מושלם תמיד',
      'מי שחוסכות זמן באיפור יומיומי',
      'בעלות גבות דלילות או צלקות',
      'נשים פעילות ספורטאיות'
    ],
    problemsSolved: [
      'גבות דלילות עם פערים',
      'חוסר צבע וניגודיות בגבות',
      'גבות לא סימטריות',
      'צלקות בקו הגבה',
      'אובדן שיער בגבות עקב גיל או מצב רפואי'
    ]
  }
];

// Image Overlay Component
const ImageOverlay = ({ image, treatmentName, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className={styles.imageOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.button
        className={styles.closeButton}
        onClick={onClose}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={28} />
      </motion.button>

      <motion.div
        className={styles.overlayImageContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt={treatmentName}
          className={styles.overlayImage}
        />
      </motion.div>
    </motion.div>
  );
};

const TreatmentCard = ({ treatment, index, isOpen, onToggle }) => {
  const IconComponent = treatment.icon;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div
        className={styles.treatmentCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header - Always Visible */}
        <div 
          className={styles.serviceHeader}
          onClick={onToggle}
        >
          <div className={styles.headerContent}>
            <div className={styles.serviceImage}>
              <img 
                src={treatment.mainImage} 
                alt={treatment.name}
                className={styles.headerImage}
              />
            </div>
            
            <div className={styles.serviceInfo}>
              <h3 className={styles.serviceTitle}>{treatment.name}</h3>
              <p className={styles.serviceDescription}>
                {treatment.suitableFor[0]}
              </p>
            </div>
            
            <div className={styles.toggleIcon}>
              {isOpen ? '−' : '+'}
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className={styles.drawerContent}
            >
              <div className={styles.serviceDetails}>
                <div className={styles.contentGrid}>
                  {/* Image Section */}
                  <div className={styles.imageSection}>
                    <div className={styles.mainImageWrapper}>
                      <img 
                        src={treatment.mainImage} 
                        alt={`${treatment.name} - תמונה ראשית`}
                        className={styles.mainDetailImage}
                      />
                    </div>

                    {/* Mini Gallery - כל התמונות */}
                    <div className={styles.galleryContainer}>
                      <h4>גלריית תמונות:</h4>
                      <p className={styles.galleryTip}>לחצי על כל תמונה כדי לפתוח אותה בגודל מלא</p>
                      <div className={styles.imageGallery}>
                        {treatment.galleryImages.map((image, i) => (
                          <motion.div
                            key={i}
                            className={styles.galleryImage}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleImageClick(image)}
                          >
                            <img 
                              src={image} 
                              alt={`${treatment.name} ${i + 1}`}
                              className={styles.galleryImageImg}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className={styles.infoSection}>
                    {/* למי זה מתאים */}
                    <motion.div 
                      className={styles.detailItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <strong>למי הטיפול מתאים:</strong>
                      <ul className={styles.detailList}>
                        {treatment.suitableFor.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.05 }}
                          >
                            <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: treatment.color }} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* בעיות שהוא פותר */}
                    <motion.div 
                      className={styles.detailItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <strong>מה הטיפול פותר:</strong>
                      <ul className={styles.detailList}>
                        {treatment.problemsSolved.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + i * 0.05 }}
                          >
                            <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: treatment.color }} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* כפתור פניה */}
                <motion.div 
                  className={styles.ctaButtonWrapper}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    text="לעוד פרטים ממני על הטיפול"
                    message={`היי מאי הגעתי מהדף שלך אשמח לשמוע עוד פרטים על ${treatment.name}`}
                  />
                </motion.div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <ImageOverlay 
            image={selectedImage}
            treatmentName={treatment.name}
            onClose={closeOverlay}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const TreatmentsShowcase = () => {
  const containerRef = useRef(null);
  const [openTreatments, setOpenTreatments] = useState({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const toggleTreatment = (treatmentId) => {
    setOpenTreatments(prev => ({
      ...prev,
      [treatmentId]: !prev[treatmentId]
    }));
  };

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 2,
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

    // אנימציית כותרת
    gsap.fromTo(
      `.${styles.mainTitle}`,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.mainTitle}`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // אנימציית תת-כותרת
    gsap.fromTo(
      `.${styles.subtitle}`,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.subtitle}`,
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

  return (
    <div ref={containerRef} className={styles.container}id="טיפולים">
      {/* רקע מונפש */}
      <motion.div 
        className={styles.backgroundPattern}
        style={{ y: backgroundY }}
      />

      {/* כותרת */}
      <div className={styles.header}>
        <h2 className={styles.mainTitle} >
          הטיפולים שלי
        </h2>
        <p className={styles.subtitle}>
          כל טיפול מותאם אישית עם תשומת לב לכל פרט
        </p>
      </div>

      {/* רשימת טיפולים */}
      <div className={styles.treatmentsContainer}>
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            index={index}
            isOpen={openTreatments[treatment.id]}
            onToggle={() => toggleTreatment(treatment.id)}
          />
        ))}
      </div>

      {/* קריאה לפעולה בתחתית */}
      <motion.div
        className={styles.bottomCTA}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>רוצה לדעת איזה טיפול הכי מתאים לך?</h3>
 
        <Button text="תלחצי ממש כאן ואנחנו מדברות"/>
      </motion.div>
    </div>
  );
};

export default TreatmentsShowcase;