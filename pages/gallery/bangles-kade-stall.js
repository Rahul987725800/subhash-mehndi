import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
const images = range(1, 15).map(
  (v) => `/images/churi/churi-bangle-jutti-kade-prandi-stall${v}.jpg`
);
function banglesKadeStall() {
  return <CommonView header="Bangles Kade Jutti Stall" images={images} />;
}

export default banglesKadeStall;
