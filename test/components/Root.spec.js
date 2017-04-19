import _ from 'lodash'
import Root from 'src/components/Root'

describe('<Root />', () => {
  it('renders', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper.exists()).to.equal(true)
    expect(wrapper.find('Header').exists()).to.equal(true)
    expect(wrapper.find('Content').exists()).to.equal(true)
    expect(wrapper.find('Aside').exists()).to.equal(true)

    const inst = wrapper.instance()
    const store = inst.getChildContext().store
    const actions = inst.getChildContext().actions
    expect(_.isNil(store)).to.equal(false)
    expect(_.isEmpty(store)).to.equal(false)
    expect(_.isNil(actions)).to.equal(false)
    expect(_.isEmpty(actions)).to.equal(true)
  })
})
