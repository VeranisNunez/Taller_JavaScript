export const isPangram = (phrase) => {
  phrase = phrase.toLowerCase();
  const isIncludes = (letter) => phrase.includes(letter);
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
  return letters.every(isIncludes);
};
