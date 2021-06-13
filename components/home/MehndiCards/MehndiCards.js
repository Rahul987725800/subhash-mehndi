import MehndiCard from './MehndiCard';
import styles from './MehndiCards.module.scss';
function MehndiCards() {
  return (
    <div className={styles.cards}>
      <MehndiCard
        src="/images/bridal/bridal-wedding-mehndi-by-subhash-gupta-mehndi-artist8.jpg"
        type="Bridal Mehndi"
        description="Bridal mehndi meant primarily for bride. This involves application of florals, chequered dots, trails and other traditional patterns. It is a ritual for Indian weddings."
        path="/gallery/bridal-mehndi"
      />

      <MehndiCard
        src="/images/designer/designer-arabic-function-mehndi-by-subhash-gupta-mehndi-artist1.jpg"
        type="Designer Mehndi"
        description="Designer mehndi is suitable for guests in functions and weddings. Arabic, Indo-Arabic, Indo-Western mehndi come under this category."
        path="/gallery/designer-mehndi"
      />
      <MehndiCard
        src="/images/churi/churi-bangle-jutti-kade-prandi-stall3.jpg"
        type="Churi Stall"
        description="Bangles, churi, jutti prandi stall, offering wide range of bangles, kada, hathful at your function."
        path="/gallery/bangles-kade-stall"
      />
    </div>
  );
}

export default MehndiCards;
