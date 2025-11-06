import React from 'react';
import styles from './Rissim.module.css';

// Import your images
import result1 from "../../images/מאי כחלון הרמת ריסים 1.png";
import result2 from "../../images/מאי כחלון הרמת ריסים 2.png";
import result3 from "../../images/מאי כחלון הרמת ריסים 3.png";

import result5 from "../../images/מאי כחלון הרמת ריסים 5.png";

import result7 from "../../images/מאי כחלון הרמת ריסים 7.png";
import result8 from "../../images/מאי כחלון הרמת ריסים 8.png";
import result9 from "../../images/מאי כחלון הרמת ריסים 9.png";
import result10 from "../../images/מאי כחלון הרמת ריסים 10.png";
import result11 from "../../images/מאי כחלון הרמת ריסים 11.png";
import result12 from "../../images/מאי כחלון הרמת ריסים 12.png";
import result13 from "../../images/מאי כחלון הרמת ריסים 13.png";
import result14 from "../../images/מאי כחלון הרמת ריסים 14.png";
import result15 from "../../images/מאי כחלון הרמת ריסים 15.png";
import result16 from "../../images/מאי כחלון הרמת ריסים 16.png";
import result17 from "../../images/מאי כחלון הרמת ריסים 17.png";
import result18 from "../../images/מאי כחלון הדבקת ריסים 1.png";
import result19 from "../../images/מאי כחלון הדבקת ריסים 2.png";
import result20 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 1.png";
import result21 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 2.png";
import result22 from "../../images/מאי כחלון הדבקת ריסים לפני אחרי 3.png";

const Rissim = () => {
 const images = [
    result1, result2, result3, result5, 
    result7, result8, result9, result10, result11, result12, 
    result13, result14, result15, result16, result17, result18, result19, result20, result21, result22
 ];

 return (
   <>
     <div className={styles.title}>
        מאות נשים יצאו ממני עם ריסים מושלמות
     </div>
  <div className={styles.explain}>
      (הרמת ריסים + הדבקת ריסים)
     </div>
  
     <div className={styles.container}>
       <div className={styles.scrollTrack}>
         {/* קבוצה ראשונה של תמונות */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`first-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`המלצה ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
         {/* קבוצה שנייה זהה של תמונות */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`second-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`המלצה ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
       </div>
     </div>
 
   </>
 );
};

export default Rissim;