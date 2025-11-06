import Button from "../components/button/Button"
import ScrollTimeline from "../components/Timeline/Timeline"
import styles from "./FifthScreen.module.css"
const FifthScreen=()=>{

    return <>
    <div className={styles.title}>חשוב לי שתדעי</div>
      <div className={styles.description}>אמנם הצלחה בתחום נשמעת כמו חלום ורוד (וברגע שאת מפוצצת יומן היא גם כזו), אבל כדי להגיע למצב שאת מצליחה בתחום</div>
          <div className={styles.title}>את תצטרכי להצטייד ב..</div>
          {/* התמדה
          סבלנות
          נכונות ונחישות
          */}
      <ScrollTimeline/>
    </>
}
export default FifthScreen