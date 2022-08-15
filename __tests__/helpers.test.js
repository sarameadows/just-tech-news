const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-08-15 16:23:03');

    expect(format_date(date)).toBe('8/15/2022');
});

test('format_plural() correctly pluralizes a word', () => {
    const word = "comment";
    const one = 1;
    const two = 2;

    expect(format_plural(word, one)).toBe('comment');
    expect(format_plural(word, two)).toBe('comments');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});