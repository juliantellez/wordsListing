import _ from 'lodash'
import WordsMap from 'src/client/reducers/definitions/WordsMap'

describe.only('WordsMap', () => {
  it('creates Map and sorts', () => {
    const list = ['i', 'am', 'a', 'list']
    const wordsMap = new WordsMap(list)
    const expected = [ 'a', 'am', 'i', 'list' ]
    console.assert(_.isEqual(wordsMap.list.toJS(), expected))
  })
  it('creates Tabs', () => {
    const list = ['aav', 'bbs', 'ccs', 'dds', 'as', 'as']
    const expected = {
      a: { aav: 1, as: 2 },
      b: { bbs: 1 },
      c: { ccs: 1 },
      d: { dds: 1 },
    }
    const wordsMap = new WordsMap(list)
    console.assert(_.isEqual(wordsMap.tabs.toJS(), expected))
  })
  it('iterates within map', () => {
    const list = ['as', 'as', 'as', 'as', 'as']
    const expected = {a: {as: 5}}
    const wordsMap = new WordsMap(list)
    console.assert(_.isEqual(wordsMap.tabs.toJS(), expected))
  })
})
