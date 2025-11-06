import React from 'react';
import styles from './Rissim.module.css';

// Import your images
import result1 from "../../images/מאי כחלון עיצוב גבות טבעיות 1.png";
import result2 from "../../images/מאי כחלון עיצוב גבות טבעיות 2.png";
import result3 from "../../images/מאי כחלון עיצוב גבות טבעיות 3.png";
import result4 from "../../images/מאי כחלון עיצוב גבות טבעיות 4.png";
import result5 from "../../images/מאי כחלון עיצוב גבות טבעיות 5.png";
import result6 from "../../images/מאי כחלון עיצוב גבות טבעיות 6.png";

import result7 from "../../images/מאי כחלון עיצוב גבות טבעיות 7.png";
import result8 from "../../images/מאי כחלון עיצוב גבות טבעיות 8.png";

const Gabot = () => {
 const images = [
    result1, result2, result3, result4, result5, result6,, result7,, result8

 ];

 return (
   <>
     <div className={styles.title}>
   
     </div>
  <div className={styles.explain}>
      (עיצוב גבות טבעיות)
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

export default Gabot;