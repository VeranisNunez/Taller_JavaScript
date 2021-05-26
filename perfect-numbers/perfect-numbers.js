export const classify = (n) => {

  if(n < 1){throw Error('Classification is only possible for natural numbers.')}

  let sum = 0;
  for (let i = 1; i <= n/2; i++) {
    if (n % i == 0){sum += i;}
  }

  if(sum == n){return 'perfect'}
  else if(sum < n){return 'deficient'}
  else if(sum > n){return 'abundant'}

};
