import formatter from 'src/utils/formatters'

describe('FORMATTER:', () => {
  it('SINGLE_SPACE', () => {
    const string = 'string   with    multiple    spaces'
    const expected = 'string with multiple spaces'
    const entry = formatter.SINGLE_SPACE(string)
    expect(entry).to.equal(expected)
  })
  it('SINGLE_DOTS', () => {
    const string = 'string.. with ..multiple.. ... ...... ..dots'
    const expected = 'string. with .multiple. . . .dots'
    const entry = formatter.SINGLE_DOTS(string)
    expect(entry).to.equal(expected)
  })
  it('SINGLE_COMMAS', () => {
    const string = 'string,, with ,,multiple,,,,,, ,,, ,,, ,,commas'
    const expected = 'string, with ,multiple, , , ,commas'
    const entry = formatter.SINGLE_COMMAS(string)
    expect(entry).to.equal(expected)
  })
  it('IGNORE_SPECIAL_CHARS', () => {
    const string = 'string!@#$!@# with *&^%@!multiple@#$^$^)() ™£∞§§¶¶–ºª•¶§special &(&)*):"{}chars'
    const expected = 'string with multiple special chars'
    const entry = formatter.IGNORE_SPECIAL_CHARS(string)
    expect(entry).to.equal(expected)
  })
  it('FORMAT_VALUE', () => {
    const string = (
      `string!@#$!@# without *&^%@!special@#$^$^) chars(),      
      ™£∞§§¶¶–ºª•¶§multipl dots, &(&)*):commas or spaces....."{}`
    )
    const expected = 'string without special chars, multipl dots, commas or spaces.'
    const entry = formatter.FORMAT_VALUE(string)
    expect(entry).to.equal(expected)
  })
  it('FILTER_WORDS', () => {
    const string = (
      `string!@#$!@# without *&^%@!special@#$^$^) chars(),      
      ™£∞§§¶¶–ºª•¶§multipl dots, &(&)*):commas or spaces....."{}`
    )
    const expected = 9
    const entry = formatter.FILTER_WORDS(string)
    expect(entry.length).to.equal(expected)
  })
  it('ESCAPE_NON_GRAMMATICAL_COMMAS', () => {
    const string = 'commas floating about, ,,, ,,,  ,here, , and, , there ,,,'
    const expected = 'commas floating about, here, and, there'
    const entry = formatter.ESCAPE_NON_GRAMMATICAL_COMMAS(string)
    expect(entry).to.equal(expected)
  })
  it('ESCAPE_NON_GRAMMATICAL_DOTS', () => {
    const string = 'dots. ..  .floating about. .. ..  .here. . and. . there ..'
    const expected = 'dots. floating about. here. and. there'
    const entry = formatter.ESCAPE_NON_GRAMMATICAL_DOTS(string)
    expect(entry).to.equal(expected)
  })
})
