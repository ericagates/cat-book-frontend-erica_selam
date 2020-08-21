import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'
import {mount} from 'enzyme'
import CatShow from '../CatShow.js'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatShow />, div)
})

it('renders the header', () => {
    const catShow = mount(<CatShow />)
    expect(catShow.find('Header').length).toEqual(1)
})

it('renders the cat show title', () => {
    const catShow = shallow(<CatShow />)
    expect(catShow.find('h3').text()).toEqual('Cat Show Page!')
})

it('renders the footer', () => {
    const catShow = mount(<CatShow />)
    expect(catShow.find('Footer').length).toEqual(1)
})