import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
const images = range(1, 20).map(
  (v) =>
    `/images/designer/designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
function designerMehndi() {
  return (
    <CommonView
      header="Designer Mehndi"
      images={images}
      description="Designer mehndi includes other types like Arabic, Indo Arabic
  mehndi, Western mehndi. It is less heavy and we create more spaced
  designs."
      alt="designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist"
    />
  );
}

export default designerMehndi;
