import React from 'react';
import StorySwipe from './StorySwipe';
import styles from './StoriesBlock.module.scss';
import FirstStory from './stories/FirstStory';
import SecondStory from './stories/SecondStory';
function StoriesBlock() {
  return (
    <div className={styles.storiesBlock}>
      <StorySwipe items={[<FirstStory />, <SecondStory />]} />
    </div>
  );
}

export default StoriesBlock;
