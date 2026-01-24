import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './NavBarNew.module.css';
import logo from "../../images/מאי כחלון לוגו.png";
import PrivacyPolicy from '../../privacy/Privacy'; // הוסף את הייבוא הזה

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [errors, setErrors] = useState({ fullName: '', phone: '', reason: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false); // הוסף state לאישור מדיניות פרטיות

  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "Maykahlon111@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto';
    if (!submitted) {
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (reasonRef.current) reasonRef.current.value = "";
      setErrors({ fullName: '', phone: '', reason: '' });
      setAgreed(false); // איפוס אישור מדיניות פרטיות
    }
  };

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;

    let valid = true;
    const newErrors = { ...errors };

    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    } else newErrors.fullName = '';

    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    } else newErrors.phone = '';

    if (!reason.trim()) {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (reason.trim().length < 5) {
      newErrors.reason = 'נא להזין לפחות 5 תווים';
      valid = false;
    } else newErrors.reason = '';

    setErrors(newErrors);
    if (!valid) return;

    setIsSubmitting(true);

    const serverData = {
      name,
      phone,
      email: "",
      reason,
      reciver
    };

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
          setErrors({ fullName: '', phone: '', reason: '' });
          setAgreed(false); // איפוס אישור מדיניות פרטיות
          closeForm();
        }, 3000);
      } else throw new Error('Failed to submit form');
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.navbarInner}>
          <div className={styles.logo}>
            <img src={logo} alt="לוגו" />
          </div>
          <button className={styles.menuButton} onClick={openForm}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonText}>לחצי כאן לפרטים על הקורס</span>
            </div>
          </button>
        </div>
      </nav>

      {isFormOpen && (
        <div className={styles.formOverlay} onClick={closeForm}>
          <div className={styles.formModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <button className={styles.formCloseButton} onClick={closeForm}>
                <FaTimes />
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="fullName">שם מלא</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  placeholder="השם המלא שלך"
                  disabled={isSubmitting || submitted}
                  ref={fullNameRef}
                />
                {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">מספר טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="050-0000000"
                  disabled={isSubmitting || submitted}
                  ref={phoneRef}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  className={`${styles.textarea} ${errors.reason ? styles.inputError : ''}`}
                  placeholder="סיבת הפנייה"
                  disabled={isSubmitting || submitted}
                  ref={reasonRef}
                />
                {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
              </div>
              
              {/* תיבת האישור למדיניות הפרטיות */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                marginTop: "20px",
                marginBottom: "20px"
              }}>
                <label style={{ 
                  direction: "rtl", 
                  fontFamily: "AssistantR", 
                  fontSize: "0.9rem", 
                  textAlign: "right", 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "5px" 
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{ marginLeft: "10px" }}
                    disabled={isSubmitting || submitted}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                <PrivacyPolicy 
  ownerName="מאי כחלון" 
 
  phone="+972544884729" 
  domain="https://maykahlon.co.il/" 
/>
                  </span>
                  ואני מאשר/ת
                </label>
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'מאי, בואי נדבר!'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarNew;