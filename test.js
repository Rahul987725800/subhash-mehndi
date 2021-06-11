const images = [1, 2, 3, 4];
function generateNumImagesPerBlock(num) {
  const result = [];
  let current = [];
  for (let i = 0; i < images.length; i++) {
    if (current.length === num) {
      result.push(current);
      current = [images[i]];
    } else {
      current.push(images[i]);
    }
  }
  if (current.length !== 0) {
    result.push(current);
  }
  return result;
}
console.log(generateNumImagesPerBlock(4));
