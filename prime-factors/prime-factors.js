export const primeFactors = (n) => {

  const prime_factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n%divisor == 0) {
      prime_factors.push(divisor);
      n = n/divisor;
    } else {divisor++}
  }
  return prime_factors;
};
