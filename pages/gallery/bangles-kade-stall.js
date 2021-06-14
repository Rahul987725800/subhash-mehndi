import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
import { useRouter } from 'next/router';
const images = range(1, 15).map(
  (v) => `/images/churi/churi-bangle-jutti-kade-prandi-stall${v}.jpg`
);
function banglesKadeStall() {
  const router = useRouter();
  return (
    <CommonView
      header="Bangles Kade Jutti Stall"
      images={images}
      description="Book bangles, churi, jutti prandi stall, offering wide range of bangles, kada, hathful at your function."
      alt="churi-bangle-jutti-kade-prandi-stall"
      parentRoute={router.pathname}
    />
  );
}

export default banglesKadeStall;
