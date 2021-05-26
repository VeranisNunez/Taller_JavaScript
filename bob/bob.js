export const hey = (message) => {

  message = (message.trim());
  let UpperCase = Boolean(message == message.toUpperCase() && /[a-z]/i.test(message));
  let question = Boolean(message.slice(-1) == '?');

  if (message == ''){return 'Fine. Be that way!'} 
  else if (question && UpperCase){return "Calm down, I know what I'm doing!"} 
  else if (question){return 'Sure.'} 
  else if (UpperCase){return 'Whoa, chill out!'} 
  else {return 'Whatever.'}
};
