import Input from 'src/components/forms/Input'

describe.only('<Input />', () => {
  it('renders', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.exists()).to.equal(true)
  })
  it('registers/deletes children', () => {
    const wrapper = shallow(<Input />)
    const inst = wrapper.instance()
    // TODO
    // inst._attachToForm(<Input name='firstInput' />)
    // console.log(<Input />)
    // console.log(inst._inputs.toJS())
  })
})
