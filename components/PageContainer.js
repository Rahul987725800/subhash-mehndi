import { useRouter } from 'next/router';
import { useContext } from 'react';

import { useSwipeable } from 'react-swipeable';
import { GlobalStateContext } from '../state/GlobalStateProvider';
import styles from './PageContainer.module.scss';
const paths = ['/', '/gallery', '/contact'];
function PageContainer({ children }) {
  const { swipeAllowedByParent, setSwipeAllowedByParent } =
    useContext(GlobalStateContext);
  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      // console.log(e);
      if (!swipeAllowedByParent.onSwipedLeft) {
        setSwipeAllowedByParent((prev) => {
          return {
            ...prev,
            onSwipedLeft: true,
          };
        });
        return;
      }
      const idx = paths.indexOf(router.pathname);
      if (idx === paths.length - 1) {
        router.push(paths[0]);
      } else {
        router.push(paths[idx + 1]);
      }
    },
    onSwipedRight: (e) => {
      if (!swipeAllowedByParent.onSwipedRight) {
        setSwipeAllowedByParent((prev) => {
          return {
            ...prev,
            onSwipedRight: true,
          };
        });
        return;
      }
      const idx = paths.indexOf(router.pathname);
      if (idx === 0) {
        router.push(paths[paths.length - 1]);
      } else {
        router.push(paths[idx - 1]);
      }
    },
    onSwiped: (e) => {},
  });

  return (
    <div className={styles.container} {...handlers}>
      {children}
    </div>
  );
}

export default PageContainer;
