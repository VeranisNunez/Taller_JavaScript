export const isIsogram = (word) => {

  if (word == '') {return true}

  const phrase = word.toLowerCase().match(/[a-z]/g);
  const set = new Set();
  for (let letter of phrase) {
    set.add(letter);
  }
  
  return set.size == phrase.length
};
