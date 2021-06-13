import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
const images = range(1, 20).map(
  (v) =>
    `/images/designer/designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
function designerMehndi() {
  return <CommonView header="Designer Mehndi" images={images} />;
}

export default designerMehndi;
