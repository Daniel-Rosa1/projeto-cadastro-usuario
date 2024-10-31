import * as zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password : string): number =>{
  if(!password) { return 0}

  const resolt = zxcvbn.default(password)
  const WEAK_PASSWORD = resolt.score <= 1;
  const MEDIOUM_PASSWORD =resolt.score <= 3;

  if(WEAK_PASSWORD){ return 30}
  else if(MEDIOUM_PASSWORD) { return 60}
  else{return 100}
}
