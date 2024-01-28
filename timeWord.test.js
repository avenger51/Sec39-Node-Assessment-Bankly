const timeToWords = require('./timeToWords'); 

describe('timeToWords function', () => {
  it('should convert 24-hour time to words correctly', () => {
    expect(timeToWords('00:12')).toBe('twelve am');
    expect(timeToWords('01:00')).toBe('one am');
    expect(timeToWords('06:01')).toBe('six one am');
    expect(timeToWords('06:10')).toBe('six ten am');
    expect(timeToWords('06:18')).toBe('six eighteen am');
    expect(timeToWords('06:30')).toBe('six thirty am');
    expect(timeToWords('10:34')).toBe('ten thirty four am');
    expect(timeToWords('23:23')).toBe('eleven twenty three pm');
  });

  it('should handle various times', () => {
    expect(timeToWords('08:30')).toBe('eight thirty am');
    expect(timeToWords('15:45')).toBe('three forty five pm');
    expect(timeToWords('02:22')).toBe('two twenty two am');
  });
});
