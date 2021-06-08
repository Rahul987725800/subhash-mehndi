import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './CustomImage.module.scss';
import { buildUrl } from 'cloudinary-build-url';

function CustomImage({
  imgCode,
  width = 200,
  height = 200,
  alt = 'mehndi design',
  triggerHover = false,
  finalImageQuality = 100,
  imagePosition = 'center',
  imageFit = 'cover',
  noHover = false,
  cursor = 'pointer',
  widthPercent = 0,
  heightPercent = 0,
}) {
  function getWidthAndHeight() {
    // console.log('ran');
    return {
      width: widthPercent ? (window.innerWidth * widthPercent) / 100 : width,
      height: heightPercent
        ? (window.innerHeight * heightPercent) / 100
        : height,
    };
  }
  const [computed, setComputed] = useState(() => getWidthAndHeight());

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
        height: `${computed.height}px`,
        width: `${computed.width}px`,
        backgroundImage: `url(${urlBlurred})`,
        backgroundPosition: imagePosition,
        backgroundSize: imageFit,
        backgroundRepeat: 'no-repeat',
        cursor,
      }}
    >
      <Image
        src={url}
        alt={alt}
        objectFit={imageFit}
        objectPosition={imagePosition}
        height={computed.height}
        width={computed.width}
        unoptimized={true}
        draggable={false}
        // for desktop image view for swipe to work properly
      />
    </div>
  );
}

export default CustomImage;
