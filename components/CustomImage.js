import Image from 'next/image';
import { useState } from 'react';
import styles from './CustomImage.module.scss';
function CustomImage({
  src,
  width = 200,
  height = 200,
  alt = 'mehndi design',
  triggerHover = false,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        styles.image,
        triggerHover || hovered ? styles.imageHovered : '',
      ].join(' ')}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        objectFit="cover"
        objectPosition="center"
        loading="eager"
        quality={100}
      />
    </div>
  );
}

export default CustomImage;
