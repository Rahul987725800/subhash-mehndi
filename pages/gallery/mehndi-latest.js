import CommonView from "@components/gallery/CommonView/CommonView";

import { range } from "@base/utils";
import { useRouter } from "next/router";
const images = range(1, 60).map(
  (v) =>
    `/images/latest/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist${v}.jpeg`
);
function mehndiLatest() {
  const router = useRouter();
  return (
    <CommonView
      header="Latest Mehndi Designs"
      images={images}
      description="Latest mehndi designs for karwa chauth and mehndi functions"
      alt="Latest-designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist"
      parentRoute={router.pathname}
    />
  );
}

export default mehndiLatest;
