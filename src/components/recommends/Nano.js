import React from 'react';
import styles from './RissimR.module.css';

// Import your images
import result1 from "../../images/מאי כחלון נאנובליידינג 1.png";
import result2 from "../../images/מאי כחלון נאנובליידינג 2.png";
import result3 from "../../images/מאי כחלון נאנובליידינג 3.png";
import result4 from "../../images/מאי כחלון נאנובליידינג 4.png";
import result5 from "../../images/מאי כחלון נאנובליידינג 5.png";
import result6 from "../../images/מאי כחלון נאנובליידינג 6.png";
import result7 from "../../images/מאי כחלון נאנובליידינג 7.png";
import result8 from "../../images/מאי כחלון נאנובליידינג 8.png";
import result9 from "../../images/מאי כחלון נאנובליידינג 9.png";
import result10 from "../../images/מאי כחלון נאנובליידינג 10.png";
import result11 from "../../images/מאי כחלון נאנובליידינג 11.png";
import result12 from "../../images/מאי כחלון נאנובליידינג 12.png";
import result13 from "../../images/מאי כחלון נאנובליידינג 13.png";
import result14 from "../../images/מאי כחלון נאנובליידינג 14.png";
import result15 from "../../images/מאי כחלון נאנובליידינג 15.png";
import result16 from "../../images/מאי כחלון נאנובליידינג 16.png";
import result17 from "../../images/מאי כחלון נאנובליידינג 17.png";

const Nano = () => {
 const images = [
    result1, result2, result3, result4, result5, result6,
    result7, result8, result9, result10, result11, result12, 
    result13, result14, result15, result16, result17
 ];

 return (
   <>
     <div className={styles.title}>
  ועם גבות מדוייקות וטבעיות
     </div>
   <div className={styles.explain}>
     (נאנובליידינג)
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

export default Nano;