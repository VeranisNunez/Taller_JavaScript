export const compute = (strand1, strand2) => {

  if (strand1 == strand2) {return 0}
  if (strand1.length == 0) {throw Error('left strand must not be empty')}
  if (strand2.length == 0) {throw Error('right strand must not be empty')}
  if (strand1.length != strand2.length) {throw Error('left and right strands must be of equal length')}

  let different = 0;
  for (let i = 0; i < strand1.length; i++) {
    if (strand1[i] != strand2[i]) {different += 1;}
  }
  return different;
};
