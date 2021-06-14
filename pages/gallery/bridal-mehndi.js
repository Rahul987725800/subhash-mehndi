import CommonView from '@components/gallery/CommonView/CommonView';

import { range } from '@base/utils';
const images = range(1, 31).map(
  (v) =>
    `/images/bridal/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist${v}.jpg`
);
function bridalMehndi() {
  return (
    <CommonView
      header="Bridal Mehndi"
      images={images}
      description="
          Bridal Mehndi involves application of mehndi across hands and legs in
          general but is customisable based on specific needs of customer. We
          also make various figures like Ganesha, Elephant, Krishna and Radha,
          Dulha Dulhan, Shehnai etc.
       "
      alt="bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist"
    />
  );
}

export default bridalMehndi;
