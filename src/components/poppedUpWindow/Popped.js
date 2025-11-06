import { useState, useRef } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import PrivacyPolicy from "../privacy/Privacy";

const Popped = ({ onClose, title }) => {
  const [agreed, setAgreed] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const experienceRef = useRef(null);
  const reciver = "Bendavidalbena@gmail.com";

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const experience = experienceRef.current.value;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }
    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }
    if (experience.trim().length < 5) {
      alert("אנא ענה על השאלה - כמה זמן את בתחום ומה את מחפשת להשיג (לפחות 5 תווים)");
      return;
    }

    const serverData = {
      name,
      phone,
      email,
      reason: experience, // שולח את התשובה בשדה reason לשרת
      reciver
    };

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverData),
      });

      if (serverResponse.ok) {
        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        experienceRef.current.value = "";
        setAgreed(false);
        handleClose();

        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("חלה שגיאה בשליחת הטופס. אנא נסה שוב.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popped}>
        <FaTimes className={styles.closeIcon} onClick={handleClose} />
        
        <div className={styles.container}>
          <div className={styles.subtitle}></div>
          <div className={styles.title}>זמן לקחת החלטה</div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="שם מלא"
                ref={nameRef}
                required
              />
              <input
                type="tel"
                className={styles.input}
                placeholder="מספר טלפון"
                ref={phoneRef}
                required
              />
              <input
                type="email"
                className={styles.input}
                placeholder="מייל"
                ref={emailRef}
                required
              />
              <textarea
                className={styles.textarea}
                placeholder="כמה זמן את בתחום ומה את מחפשת להשיג?"
                ref={experienceRef}
                rows={4}
                required
              />

              {/* תיבת האישור למדיניות הפרטיות */}
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className={styles.checkbox}
                    required
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                    <PrivacyPolicy 
                      ownerName="אלבנה פטרובה" 
                      email="inbarbenaderet@gmail.com" 
                      phone="+972 50-686-7653" 
                      domain="https://inbarbenaderet.co.il/" 
                    />
                  </span>
                  ואני מאשר/ת
                </label>
              </div>

              <button type="submit" className={styles.button}>
                אלבנה, צרי איתי קשר
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popped;