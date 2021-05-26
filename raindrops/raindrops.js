export const convert = (number) => {

  let result = [];
  if (number % 3 == 0){result.push('Pling')};
  if (number % 5 == 0){result.push('Plang')};
  if (number % 7 == 0){result.push('Plong')};
  if (result.length == 0){result.push(number)};

  return result.toString().replace(/,/g,"")
};
