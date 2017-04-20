import tally from 'src/utils/tally'

describe('tally', () => {
  it('commasLength', () => {
    const entry = 'asdferg, ,,,,a ,asdf, , ,asdf ,,,,, asd,,,,,  d'
    const expected = 3
    const commasLenght = tally.commasLength(entry)
    expect(commasLenght).to.equal(expected)
  })
  it('fullStopsLength', () => {
    const entry = 'asdferg.. ... .. .a. .asdf. . .asdf. .asd.  d'
    const expected = 5
    const fullStopsLength = tally.fullStopsLength(entry)
    expect(fullStopsLength).to.equal(expected)
  })
  it('wordsLength', () => {
    const entry = 'asdferg.. adf .HLKHHKLHHLKHJ. .^&%$#,,,,. .a. .asdf. . .asdf. .asd.  d'
    const expected = 8
    const wordsLength = tally.wordsLength(entry)
    expect(wordsLength).to.equal(expected)
  })
})
