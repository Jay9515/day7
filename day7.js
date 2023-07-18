function findOverlap(word1, word2) {
  let overlap = "";
  for (let i = Math.min(word1.length, word2.length); i > 0; i--) {
    if (word1.endsWith(word2.substring(0, i))) {
      overlap = word2.substring(0, i);
      break;
    }
  }
  return overlap;
}

function join(words) {
  let result = words[0];

  let minOverlap = Infinity;
  for (let i = 1; i < words.length; i++) {
    const overlap = findOverlap(words[i - 1], words[i]);
    minOverlap = Math.min(minOverlap, overlap.length);
    result += words[i].substring(overlap.length);
  }

  let uniqueOverlap = "";
  for (let i = 0; i < minOverlap; i++) {
    if (uniqueOverlap.indexOf(result[i]) === -1) {
      uniqueOverlap += result[i];
    }
  }

  return [result, minOverlap];
}

console.log(join(["oven", "envier", "erase", "serious"])); 
console.log(join(["move", "over", "very"])); 
console.log(join(["jay", "aypr", "prak", "akash"])); 
console.log(join(["aaa", "bbb", "ccc", "ddd"])); 
console.log(join(["beau", "eaut", "auti","utif","tifu","iful"]));
console.log(join(["engi", "neer", "ing"]));
console.log(join(["con", "nsis", "stent"]));
