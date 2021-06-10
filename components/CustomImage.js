import { useState, useRef, useEffect } from 'react';
import styles from './CustomImage.module.scss';
import Image from 'next/image';
import Loader from './Loader';
function CustomImage({
  src,
  width = '200px',
  height = '200px',
  alt = 'mehndi design',
  triggerHover = false,
  imagePosition = 'center',
  imageFit = 'cover',
  addHoverEffect = false,
  cursor = 'pointer',
  imageQuality = 1,
  loading = 'lazy',
  scale = 1,
  addZoomEffect = false,
}) {
  const imageRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [imageTransforms, setImageTransforms] = useState({
    x: 0,
    y: 0,
  });
  const [moving, setMoving] = useState(false);
  const mouseEvents = () => {
    let events = {};
    if (addHoverEffect) {
      events = {
        ...events,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      };
    }

    if (addZoomEffect) {
      events = {
        ...events,
        onMouseDown: () => {
          setMoving(true);
        },
        onMouseUp: () => {
          setMoving(false);
        },
        onMouseLeave: () => {
          // console.log('leave');
          setMoving(false);
        },
        onMouseMove: (e) => {
          if (!moving) return;

          const img = imageRef.current.querySelector('img');
          // console.log(img.style.transform);
          const imageContainerBox = imageRef.current.getBoundingClientRect();
          const imageBox = img.getBoundingClientRect();
          // console.log(imageContainerBox);
          // console.log(imageBox);
          let newPosY;
          if (
            imageBox.top + e.movementY > imageContainerBox.top ||
            imageBox.bottom + e.movementY < imageContainerBox.bottom
          ) {
            newPosY = imageTransforms.y;
          } else {
            newPosY = imageTransforms.y + e.movementY;
          }
          let newPosX;
          if (
            imageBox.left + e.movementX > imageContainerBox.left ||
            imageBox.right + e.movementX < imageContainerBox.right
          ) {
            newPosX = imageTransforms.x;
          } else {
            newPosX = imageTransforms.x + e.movementX;
          }

          setImageTransforms({
            x: newPosX,
            y: newPosY,
          });
          img.style.transition = ``;
          img.style.transform = `translate(${newPosX}px, ${newPosY}px) scale(${scale})`;
        },
      };
    }
    return events;
  };
  useEffect(() => {
    const img = imageRef.current.querySelector('img');
    img.style.transition = `transform 300ms ease`;
    if (addZoomEffect) {
      img.style.transform = `translate(${0}px, ${0}px) scale(${scale})`;
    } else {
      img.style.transform = ` scale(${1})`;
    }
  }, [addZoomEffect, scale]);
  useEffect(() => {
    const img = imageRef.current.querySelector('img');
    img.style.transition = `transform 300ms ease`;
    if (addHoverEffect && (triggerHover || hovered)) {
      img.style.transform = ` scale(1.1)`;
    } else {
      img.style.transform = ` scale(1)`;
    }
  }, [addHoverEffect, triggerHover, hovered]);
  return (
    <div
      {...mouseEvents()}
      className={styles.image}
      style={{
        height,
        width,
        cursor,
      }}
      ref={imageRef}
    >
      <Image
        className={styles.main}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={imageFit}
        objectPosition={imagePosition}
        draggable={false}
        loading={loading}
        quality={imageQuality}

        // so it loads before img
      />

      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
}

export default CustomImage;
