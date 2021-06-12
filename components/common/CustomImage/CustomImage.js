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
  const [prevTransforms, setPrevTransforms] = useState({
    x: 0,
    y: 0,
  });
  const [mousePositions, setMousePositions] = useState();
  const [currentTransforms, setCurrentTranforms] = useState({
    x: 0,
    y: 0,
  });
  const [imageBox, setImageBox] = useState();
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
        onMouseDown: (e) => {
          const img = imageRef.current.querySelector('img');
          setImageBox(img.getBoundingClientRect());
          setPrevTransforms(currentTransforms);
          setMousePositions({
            x: e.clientX,
            y: e.clientY,
          });
          setMoving(true);
          // console.log(e);
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

          // console.log(imageContainerBox);
          // console.log(imageBox);
          const distortionX = e.clientX - mousePositions.x;
          const distortionY = e.clientY - mousePositions.y;
          if (
            imageBox.top + distortionY <= imageContainerBox.top &&
            imageBox.bottom + distortionY >= imageContainerBox.bottom
          ) {
            setCurrentTranforms((prev) => {
              return {
                ...prev,
                y: prevTransforms.y + distortionY,
              };
            });
          } else {
            if (distortionY > 0) {
              // mouse going on bottom side
              setCurrentTranforms((prev) => {
                return {
                  ...prev,
                  y:
                    imageContainerBox.top -
                    img.getBoundingClientRect().top +
                    prev.y,
                };
              });
            } else {
              setCurrentTranforms((prev) => {
                return {
                  ...prev,
                  y:
                    imageContainerBox.bottom -
                    img.getBoundingClientRect().bottom +
                    prev.y,
                };
              });
            }
          }
          // console.log(imageBox.left + distortionX);
          // console.log(imageContainerBox.left);
          if (
            imageBox.left + distortionX <= imageContainerBox.left &&
            imageBox.right + distortionX >= imageContainerBox.right
          ) {
            setCurrentTranforms((prev) => {
              return {
                ...prev,
                x: prevTransforms.x + distortionX,
              };
            });
          } else {
            if (distortionX > 0) {
              setCurrentTranforms((prev) => {
                return {
                  ...prev,
                  x:
                    imageContainerBox.left -
                    img.getBoundingClientRect().left +
                    prev.x,
                };
              });
            } else {
              setCurrentTranforms((prev) => {
                return {
                  ...prev,
                  x:
                    imageContainerBox.right -
                    img.getBoundingClientRect().right +
                    prev.x,
                };
              });
            }
          }
          img.style.transition = ``;
          img.style.transform = `translate(${currentTransforms.x}px, ${currentTransforms.y}px) scale(${scale})`;
        },
      };
    }
    return events;
  };

  useEffect(() => {
    const img = imageRef.current.querySelector('img');
    img.style.transition = `transform 300ms ease`;
    if (addZoomEffect) {
      setCurrentTranforms({
        x: 0,
        y: 0,
      });
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
