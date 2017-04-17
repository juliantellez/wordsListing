import Header from 'src/components/sections/Header'

describe('<Header />', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.exists()).to.equal(true)
  })
})
