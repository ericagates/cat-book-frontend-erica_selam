import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'
import {mount} from 'enzyme'
import CatIndex from '../CatIndex.js'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatIndex />, div)
})

it('renders the cat index', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h3').text()).toEqual('Cat Index Page!')
})

it('renders the footer', () => {
    const catIndex = mount(<CatIndex />)
    expect(catIndex.find('Footer').text()).toEqual('Cat Tinder 🐈 brought to you by Selam and Erica at LEARN Academy!')
})

it('renders the header', () => {
    const catIndex = mount(<CatIndex />)
    expect(catIndex.find('Header').length).toEqual(1)
})

it('renders the footer', () => {
    const catIndex = mount(<CatIndex />)
    expect(catIndex.find('Footer').length).toEqual(1)
})


it('renders the footer', () => {
    const catIndex = mount(<CatIndex />)
    expect(catIndex.find('Footer').find('h3').length).toEqual(1)
})

it('renders the footer', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('Footer').dive().find('h3').length).toEqual(1)
})

it('renders the footer', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('Footer').dive().find('h3').text()).toEqual("Cat Tinder 🐈 brought to you by Selam and Erica at LEARN Academy!")
})