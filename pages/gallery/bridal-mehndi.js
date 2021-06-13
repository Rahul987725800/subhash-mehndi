import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
const images = range(1, 31).map(
  (v) =>
    `/images/bridal/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
function bridalMehndi() {
  return <CommonView header="Bridal Mehndi" images={images} />;
}

export default bridalMehndi;
