export const steps = (n) => {
  
  if(n > 0){
    let i = 0;
    while(n > 1) {
      if (n%2 == 0){ n= n/2; }
      else{ n= (n*3)+1; }
      i++;
    }
    return i
  }else{
    throw Error('Only positive numbers are allowed')
  }
};
