import { useState } from 'react';
import styles from './CustomImage.module.scss';
import { buildUrl } from 'cloudinary-build-url';

function CustomImage({
  imgCode,
  width = '200px',
  height = '200px',
  alt = 'mehndi design',
  triggerHover = false,
  finalImageQuality = 100,
  imagePosition = 'center',
  imageFit = 'cover',
  noHover = false,
  cursor = 'pointer',
}) {
  const urlBlurred = buildUrl(imgCode, {
    cloud: {
      cloudName: 'dguirphl1',
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1,
    },
  });
  const url = buildUrl(imgCode, {
    cloud: {
      cloudName: 'dguirphl1',
    },
    transformations: {
      quality: finalImageQuality,
    },
  });
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        styles.image,
        !noHover && (triggerHover || hovered) ? styles.imageHovered : '',
      ].join(' ')}
      style={{
        height,
        width,
        backgroundImage: `url(${urlBlurred})`,
        backgroundPosition: imagePosition,
        backgroundSize: imageFit,
        backgroundRepeat: 'no-repeat',
        cursor,
      }}
    >
      <img
        src={url}
        alt={alt}
        style={{
          height,
          width,
          objectFit: imageFit,
          objectPosition: imagePosition,
        }}
        draggable={false}
      />
    </div>
  );
}

export default CustomImage;
