function timeToWords(timeStr) {

  const [hourStr, minuteStr] = timeStr.split(':');
  const hours = parseInt(hourStr);
  const minutes = parseInt(minuteStr);

  const period = hours >= 12 ? 'pm' : 'am';

  const adjustedHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;


  const hoursWords = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve'
  ];

 
  const minutesWords = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];


  const tensWords = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty'
  ];

  // hours to words...
  function hoursToWords(hours) {
    if (hours === 0 || hours === 12) {
      return '';
    } else {
      return hoursWords[adjustedHours - 1];
    }
  }

  // minutes to words...
  function minutesToWords(minutes) {
    if (minutes === 0) {
      return '';
    } else if (minutes < 20) {
      return minutesWords[minutes];
    } else {
      const tensDigit = Math.floor(minutes / 10);
      const onesDigit = minutes % 10;
      const tensString = tensWords[tensDigit];
      const onesString = onesDigit !== 0 ? minutesWords[onesDigit] : '';
      return tensString + (onesString !== '' ? ' ' + onesString : '');
    }
  }

  // convert the minutes and hours to words
  const hoursInWords = hoursToWords(adjustedHours);
  const minutesInWords = minutesToWords(minutes);

  // combine all of it
  if (minutes === 0) {
    return hoursInWords + ' ' + period;
  } else {
    return hoursInWords + (hoursInWords !== '' ? ' ' : '') + minutesInWords + (minutesInWords !== '' ? ' ' : '') + period;
  }
}

module.exports = timeToWords;
