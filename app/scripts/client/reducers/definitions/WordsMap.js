import I from 'immutable'

export default class WordsMap {
  constructor (list) {
    this.list = I.List(list)
    this.tabs = I.Map()
    this._sortList()
    this._getTabs()
  }

  _sortList () {
    this.list = this.list.map(l => l.toLowerCase()).sort()
  }

  _updateWord (word) {
    const currentTab = word.charAt(0)
    let currentValue = this.tabs.get(currentTab).get(word)
    this.tabs = this.tabs.setIn([currentTab, word], currentValue += 1)
  }

  _setNewWord (word) {
    const currentTab = word.charAt(0)
    this.tabs = this.tabs.setIn([currentTab, word], 1)
  }

  _updateCurrentTab (word) {
    const currentTab = word.charAt(0)
    this.tabs.get(currentTab).has(word) ? this._updateWord(word) : this._setNewWord(word)
  }

  _setNewTab (word) {
    const currentTab = word.charAt(0)
    this.tabs = this.tabs.set(currentTab, I.Map({[word]: 1}))
  }

  _getTabs () {
    this.list.forEach(word => {
      const currentTab = word.charAt(0)
      this.tabs.has(currentTab) ? this._updateCurrentTab(word) : this._setNewTab(word)
    })
  }
}
