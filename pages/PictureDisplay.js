import { useState } from "react";
import styles from "./PictureDisplay.module.css";

export default function PictureDisplay() {
  const [showSecondPicture, setShowSecondPicture] = useState(false);

  const handleClick = () => {
    setShowSecondPicture(!showSecondPicture);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/image1.jpg" alt="First" />
        <div className={styles.circle} onClick={handleClick} />
      </div>
      {showSecondPicture && (
        <img
          className={`${styles.image} ${styles.image2}`}
          src="/image2.jpg"
          alt="Second"
        />
      )}
    </div>
  );
}
