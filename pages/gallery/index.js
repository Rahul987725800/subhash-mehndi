import styles from './index.module.scss';
import Folder from '@components/gallery/Folder/Folder';

import { range } from '@base/utils';
import CommonView from '@components/gallery/CommonView/CommonView';
const micsImages = range(1, 5).map(
  (v) => `/images/misc/subhash-gupta-doing-mehndi-design${v}.jpg`
);

function gallery() {
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
          images={micsImages}
          alt="subhash-gupta-doing-mehndi-design"
        />
      </div>
    </main>
  );
}

export default gallery;
