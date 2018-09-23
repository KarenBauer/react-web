/* eslint-disable */

function validation_digit(ci) {
  let a = 0;
  let i = 0;
  if (ci.length <= 6) {
    for (i = ci.length; i < 7; i++) {
      ci = '0' + ci;
    }
  }

  for (i = 0; i < 7; i++){
    a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
  }
  
  if (a%10 === 0){
    return 0;
  }
  
  return 10 - a % 10;
}

function validateCi(ci) {
  if (ci) {
    ci = clean_ci(ci);
    let dig = ci[ci.length - 1];
    ci = ci.replace(/[0-9]$/, '');
    if (dig == validation_digit(ci)) {
      return null;
    } else {
      return 'document.validCi';
    }
  }
}

function random_ci() {
  let ci = Math.floor(Math.random() * 10000000).toString();
  ci = ci.substring(0, 7) + validation_digit(ci);
  return ci;
}

function clean_ci(ci) {
  return ci.replace(/\D/g, '');
}

export default validateCi;
