import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from 'scrollreveal';
import { 
  Sparkles, 
  Eye, 
  Scale, 
  Droplet,
  Layers, 
  Users, 
  Camera,
  Play,
  GraduationCap,
  Briefcase,
  Award,
  Gift,
  Zap,
  ChevronDown,
  Clock,
  Calendar,
  MessageCircle
} from 'lucide-react';
import styles from './Steps.module.css';

gsap.registerPlugin(ScrollTrigger);

// קומפוננטת כפתור ההרשמה
const RegisterButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[\s-]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a 
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

// קומפוננטת מגירה יחידה
const CourseDrawer = ({ course, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);

  return (
    <div className={styles.drawerWrapper}>
      <button 
        className={`${styles.drawerHeader} ${isOpen ? styles.drawerHeaderOpen : ''}`}
        onClick={onToggle}
      >
        <div className={styles.drawerHeaderContent}>
          <div className={styles.drawerTitleSection}>
            <span className={styles.drawerNumber}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.drawerTitle}>{course.title}</h3>
          </div>
          
          <div className={styles.drawerMeta}>
            <div className={styles.metaItem}>
              <Calendar size={16} strokeWidth={1.5} />
              <span>{course.sessions} מפגשים</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} strokeWidth={1.5} />
              <span>{course.hours} שעות</span>
            </div>
          </div>
        </div>
        
        <motion.div
          className={styles.chevronIcon}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 }
            }}
            className={styles.drawerContent}
          >
            <div className={styles.drawerInner}>
              {/* מפגש 1 */}
              <div className={styles.sessionSection}>
                <div className={styles.sessionHeader}>
                  <span className={styles.sessionBadge}>מפגש 01</span>
                  <h4 className={styles.sessionTitle}>מפגש ראשון</h4>
                </div>
                
                <ul className={styles.itemsList}>
                  {course.session1.map((item, i) => {
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

              {/* מפגש 2 */}
              <div className={styles.sessionSection}>
                <div className={styles.sessionHeader}>
                  <span className={styles.sessionBadge}>מפגש 02</span>
                  <h4 className={styles.sessionTitle}>מפגש שני</h4>
                </div>
                
                <ul className={styles.itemsList}>
                  {course.session2.map((item, i) => {
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

              {/* בונוס */}
              <div className={styles.bonusSection}>
                <Gift className={styles.bonusIcon} size={24} strokeWidth={1.5} />
                <p className={styles.bonusText}>
                  בסיום הקורס תקבלי <span className={styles.highlight}>תעודת הסמכה</span> + <span className={styles.highlight}>ערכה מקצועית מלאה</span> + <span className={styles.highlight}>ליווי אישי מלא</span>
                </p>
              </div>

              {/* כפתור הרשמה */}
              <div className={styles.buttonSection}>
                <RegisterButton 
                  phoneNumber="+972544884729"
                  message={`היי מאי הגעתי מהדף שלך, אשמח לשמוע עוד על ${course.title}`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CoursesAccordion = () => {
  const [openDrawers, setOpenDrawers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1000,
      distance: '40px',
      opacity: 0,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      reset: false,
      mobile: true,
    });

    sr.reveal(`.${styles.drawerWrapper}`, {
      interval: 150,
      origin: 'bottom',
      scale: 0.95,
    });

    return () => sr.destroy();
  }, []);

  const toggleDrawer = (index) => {
    setOpenDrawers(prev => {
      if (prev.includes(index)) {
        // אם המגירה פתוחה - סוגרים אותה
        return prev.filter(i => i !== index);
      } else {
        // אם המגירה סגורה - פותחים אותה
        return [...prev, index];
      }
    });
  };

  // נתוני הקורסים
  const courses = [
    {
      title: 'קורס עיצוב גבות',
      sessions: 2,
      hours: '4-5',
      session1: [
        { text: 'לימוד עיוני', icon: Sparkles },
        { text: 'הכרת הטכניקה של עיצוב גבות', icon: Eye },
        { text: 'יתרונות וחסרונות: חוט, שעווה, פינצטה', icon: Scale },
        { text: 'אבחון סוג העור', icon: Droplet },
        { text: 'שרטוט צורה מושלמת', icon: Eye },
        { text: 'צביעה ומילוי גבות', icon: Sparkles },
        { text: 'שלבי העבודה והמוצרים', icon: Layers },
        { text: 'עיצוב גבות לגברים', icon: Users },
        { text: 'צילום ושיווק דיגיטלי', icon: Camera },
      ],
      session2: [
        { text: 'צפייה מלאה בטיפול', icon: Play },
        { text: 'תרגול על 2 מודליסטיות', icon: GraduationCap },
        { text: 'הכנה לפתיחת עסק', icon: Briefcase },
        { text: 'קבלת תעודת הסמכה', icon: Award },
      ]
    },
    {
      title: 'קורס הרמת ריסים',
      sessions: 2,
      hours: '4-5',
      session1: [
        { text: 'לימוד עיוני', icon: Sparkles },
        { text: 'הכרת הטכניקה של הרמת ריסים', icon: Eye },
        { text: 'מענה לכל שאלה וידע מלא ונרחב', icon: GraduationCap },
        { text: 'עבודה עם חומרים היפואלרגניים הטובים בשוק', icon: Droplet },
        { text: 'התאמת שתל ללקוחה וההבדל בין סוגי השתלים', icon: Layers },
        { text: 'מהם שלבי העבודה ומהם המוצרים', icon: Scale },
        { text: 'בניית תהליך עבודה שלב אחרי שלב', icon: Briefcase },
        { text: 'הודעות מובנות לשליחה ללקוחות', icon: Users },
        { text: 'צילום ושיווק ברשתות החברתיות', icon: Camera },
      ],
      session2: [
        { text: 'צפייה מלאה בטיפול הרמה', icon: Play },
        { text: 'תרגול על 2 מודליסטיות', icon: GraduationCap },
        { text: 'סיכום והכנה לפתיחת עסק', icon: Briefcase },
        { text: 'קבלת תעודת הסמכה מקצועית', icon: Award },
      ]
    },
    {
      title: 'קורס הדבקת ריסים',
      sessions: 2,
      hours: '4-5',
      session1: [
        { text: 'לימוד עיוני', icon: Sparkles },
        { text: 'הכרת הטכניקה של הדבקת ריסים', icon: Eye },
        { text: 'מענה לכל שאלה וידע מלא ונרחב', icon: GraduationCap },
        { text: 'עבודה עם דבק לבן ודבק שחור', icon: Droplet },
        { text: 'סגנונות בהדבקה - חתולי, בובתי ועוד', icon: Sparkles },
        { text: 'מהם שלבי העבודה והמוצרים', icon: Layers },
        { text: 'עבודה עם שכבת בסיס ובניית הדבקה חזקה', icon: Scale },
        { text: 'צילום ושיווק ברשתות החברתיות', icon: Camera },
      ],
      session2: [
        { text: 'צפייה מלאה בטיפול הדבקה', icon: Play },
        { text: 'תרגול על 2 מודליסטיות', icon: GraduationCap },
        { text: 'סיכום והכנה לפתיחת עסק', icon: Briefcase },
        { text: 'קבלת תעודת הסמכה מקצועית', icon: Award },
      ]
    }
  ];

  const helpWhatsappLink = `https://wa.me/+972544884729?text=${encodeURIComponent('היי מאי, אני רוצה לברר איזה קורס מתאים לי')}`;

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.accordionWrapper}>
        {courses.map((course, index) => (
          <CourseDrawer
            key={index}
            course={course}
            index={index}
            isOpen={openDrawers.includes(index)}
            onToggle={() => toggleDrawer(index)}
          />
        ))}
      </div>

      {/* כפתור עזרה מרכזי */}
      <div className={styles.helpButtonWrapper}>
        <a 
          href={helpWhatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.helpButton}
        >
          <MessageCircle className={styles.helpButtonIcon} size={22} strokeWidth={2} />
          <span>אני רוצה לברר איזה קורס מתאים לי</span>
        </a>
      </div>
    </div>
  );
};

export default CoursesAccordion;