import MehndiCard from './MehndiCard';
import styles from './MehndiCards.module.scss';
function MehndiCards() {
  return (
    <div className={styles.cards}>
      <MehndiCard
        src="/161.jpg"
        type="Bridal Mehndi"
        description="Gupta Mehandi feels proud in meeting tons of diverse desires by
            bringing a great range of Mehandi designs for ladies. The classic
            beauty of each of these mehandi and awesome color that sets well
            truly makes the occasion pleasant and memorable for ladies"
      />
      <MehndiCard
        src="/161.jpg"
        type="Designer Mehndi"
        description="Gupta Mehandi feels proud in meeting tons of diverse desires by
            bringing a great range of Mehandi designs for ladies. The classic
            beauty of each of these mehandi and awesome color that sets well
            truly makes the occasion pleasant and memorable for ladies"
      />
      <MehndiCard
        src="/161.jpg"
        type="Churi Stall"
        description="Gupta Mehandi feels proud in meeting tons of diverse desires by
            bringing a great range of Mehandi designs for ladies. The classic
            beauty of each of these mehandi and awesome color that sets well
            truly makes the occasion pleasant and memorable for ladies"
      />
    </div>
  );
}

export default MehndiCards;
