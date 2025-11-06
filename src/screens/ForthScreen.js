import Button from "../components/button/Button"
import styles from "./ForthScreen.module.css"
const ForthScreen=()=>{
return <>
<div className={styles.title}>אז למה דווקא עכשיו..?</div>
<div className={styles.description}>שנינו יודעת מה יקרה ברגע שתצאי מהדף הזה. <br/> כל הסיבות ל״למה לא״ יתחילו לעלות לך לראש, אולי זו התקופה שלא מתאימה, אולי עולים לך חששות שלא תצליחי ו״חבל על הנסיון״ עד לפעם הבאה שתרגישי שאת רוצה לעשות שינוי בחיים שלך (ולכי תדעי מתי זה יקרה) ולכן..  </div>
<div className={styles.title}>יש לך 2 אופציות</div>
<div className={styles.descriptionContainer}>
<div className={styles.description}>האופציה הראשונה היא לדחות את ההחלטה.. לאחרי החגים, למחר, לשבוע הבא, לתקופה ״יותר רגועה״ לרגע ה״מושלם״ (ששנינו יודעות שהוא כנראה לא יגיע) </div>
<div className={styles.description}>והאופצייה השנייה היא לעשות את הצעד, לנסות, למרות כל התירוצים, הסיבות והחששות שעולים לך לראש עכשיו. להעז ובאמת לעשות צעד שיכול לשנות את החיים שלך לתמיד! כל מה שאת צריכה לעשות כדי להיות בטוחה שזה באמת בשבילך הוא להשאיר פרטים בטופס למטה ואחזור אלייך לשיחת התאמה <strong>ללא עלות</strong>  בימים הקרובים</div>
</div>
{/* ל*/}
<Button text="לחצי כאן לשיחת התאמה ללא עלות"/>
</>

}
export default ForthScreen