import Root from 'src/components/Root'

describe('<Root />', () => {
  it('renders', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper.exists()).to.equal(true)
  })
})
