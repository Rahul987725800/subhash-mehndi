import React, { useRef, useEffect } from 'react';
import styles from './Story.module.scss';
function Story({ title, description, imageUrl, videoUrl }) {
  const videoRef = useRef();
  useEffect(() => {
    if (videoUrl) {
      videoRef.current.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      });
      // videoRef.current.currentTime = 3;
      videoRef.current.play();
    }
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* to enable (play without interaction)/autoplay by user muted="muted" must be set */}
      <video
        className={styles.video}
        muted="muted"
        ref={videoRef}
        src={videoUrl}
      ></video>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Story;
