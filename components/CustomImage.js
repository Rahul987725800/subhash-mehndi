import { useState } from 'react';
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
}) {
  const [hovered, setHovered] = useState(false);
  const mouseEvents = () => {
    if (addHoverEffect)
      return {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      };
    return {};
  };
  return (
    <div
      {...mouseEvents()}
      className={[
        styles.image,
        addHoverEffect && (triggerHover || hovered) ? styles.imageHovered : '',
      ].join(' ')}
      style={{
        height,
        width,
        cursor,
      }}
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
