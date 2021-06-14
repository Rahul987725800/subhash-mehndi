import styles from './index.module.scss';
import Folder from '@components/gallery/Folder/Folder';

import { range } from '@base/utils';
import CommonView from '@components/gallery/CommonView/CommonView';
import { useRouter } from 'next/router';
const miscImages = range(1, 5).map(
  (v) => `/images/misc/subhash-gupta-doing-mehndi-design${v}.jpg`
);
const bridalImages = range(1, 5).map(
  (v) =>
    `/images/bridal/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
const designerImages = range(1, 5).map(
  (v) =>
    `/images/designer/designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
const banglesImages = range(1, 5).map(
  (v) => `/images/churi/churi-bangle-jutti-kade-prandi-stall${v}.jpg`
);
function gallery() {
  const router = useRouter();
  let folders = [
    {
      image:
        '/images/bridal/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist6.jpg',
      link: '/gallery/bridal-mehndi',
      linkText: 'Bridal Mehandi',
    },
    {
      image:
        '/images/designer/designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist2.jpg',
      link: '/gallery/designer-mehndi',
      linkText: 'Designer Mehandi',
    },
    {
      image: '/images/churi/churi-bangle-jutti-kade-prandi-stall2.jpg',
      link: '/gallery/bangles-kade-stall',
      linkText: 'Bangles Kade Stall',
    },
  ];

  return (
    <main className={styles.gallery}>
      <h1 className={styles.header}>Gallery</h1>
      <div className={styles.folders}>
        {folders.map((folder, i) => {
          return <Folder key={i} folder={folder} />;
        })}
      </div>
      <div className={styles.miscImages}>
        <CommonView
          header="Miscellaneous"
          images={[
            ...miscImages,
            ...bridalImages,
            ...designerImages,
            ...banglesImages,
          ]}
          alt="mehndi design ceremony and churi, jutti, kade, prandi stall at indian wedding and functions"
          parentRoute={router.pathname}
        />
      </div>
    </main>
  );
}

export default gallery;
