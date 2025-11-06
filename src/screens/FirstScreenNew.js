import React, { useState, useEffect } from 'react';


import styles from './FirstScreenNew.module.css';

import lips from "../icons/wired-outline-406-study-graduation-hover-pinch (4).json"
import needle from "../icons/wired-outline-775-needle-hover-pinch (5).json"
import middleImage from "../images/מאי כחלון תמונה ראשית.png";
import rightImage from "../images/מאי כחלון תמונה ראשית.png";
import leftImage from "../images/מאי כחלון תמונה ראשית.png";
import Loader from '../components/loader/Loader';
import PinkScrollButton from '../components/buttonCopy/Button';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>MAY KAHLON</h1>
          {/* <div className={styles.description}>טיפולי איפור קבוע שיחזירו אותך להיות הגרסה הכי טובה של עצמך</div> */}
        <div className={styles.buttonContainer}>
   <PinkScrollButton text="אני מתעניינת לגבי קורסים" icon={lips} to="קורסים"/>
        <PinkScrollButton text="אני מתעניינת לגבי הטיפולים" icon={needle} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;