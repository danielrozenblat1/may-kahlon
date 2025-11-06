import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
import ServicesSection from "../components/rows/Rows"
import styles from "./SecondScreen.module.css"
const SecondScreen=()=>{
return <>
<div className={styles.description} id="קורסים">בעוד כמה חודשים מהיום</div>
<div className={styles.title}>החיים שלך יכולים להשתנות מקצה לקצה!</div>
{/* שיהיה מודגש בunderline */}
<div className={styles.description}>כי אם הגעת לכאן סימן שיש לך תשוקה לתחום הביוטי<strong> ואת יודעת שדרכו   </strong></div>

<BenefitsContainer/>
{/* יתרונות של הביוטי מוצגים כמו אצל דניאל אוזן 2 בשורה בתוך קונטיינר */}
 {/* תוכלי להכניס סכומים שפעם רק דמיינת
 שעת עבודה תהיה שווה הרבה יותר מהמינימום
 תחליטי מתי לעבוד וכמה לעבוד בלי אף בוס על הראש
 תקומי כל בוקר בכיף! כשאת אוהבת ומתפרנסת מהתשוקה שלך  */}



 {/* <div className={styles.description}>הבוס כבר לא יצלצל לשאול איפה את, בלילה את תוכלי לכוון את השעון המעורר לשעה שאת בוחרת, את תכניסי משכורות של הייטק </div> */}
  <div className={styles.description}>אז שנייה לפני שאראה לך את הדרך לשם, חשוב לי שנכיר - כי עד לפני כמה שנים..</div>
<div className={styles.title}>הייתי בדיוק במקום שאת נמצאת בו</div>
{/* נעים מאוד מאי כחלון */}

</>

}
export default SecondScreen