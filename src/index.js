
module.exports = function toReadable(number) {

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  if (number < 10) {
    return ones[number];
  } else if (number >= 10 && number < 20) {
    return teens[number - 10];
  } else if (number >= 20 && number < 100) {
    const tenDigit = Math.floor(number / 10);
    const oneDigit = number % 10;
    if (oneDigit === 0) {
      return tens[tenDigit];
    } else {
      return tens[tenDigit] + ' ' + ones[oneDigit];
    }
  } else if (number >= 100 && number < 1000) {
    const hundredDigit = Math.floor(number / 100);
    const remainingDigits = number % 100;
    if (remainingDigits === 0) {
      return ones[hundredDigit] + ' hundred';
    } else {
      return ones[hundredDigit] + ' hundred ' + toReadable(remainingDigits);
    }
  }
}

console.log(module.exports(999));
