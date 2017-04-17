import Form from 'src/components/forms/Form'

class Input extends React.Component {
  constructor () {
    this.state = {}
  }
  state = {}
  render () {
    return <input />
  }
}

describe.only('<Form />', () => {
  it('renders', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('registers/deletes children', () => {
    const wrapper = shallow(<Form />)
    const inst = wrapper.instance()
    // TODO
    // inst._attachToForm(<Input name='firstInput' />)
    // console.log(<Input />)
    // console.log(inst._inputs.toJS())
  })
})
