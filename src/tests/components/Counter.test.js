import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import Counter from '../../components/Counter'

/**
 * Factory function to create a ShallowWrapper for the Counter component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @return {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<Counter {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => (
    wrapper.find(`[data-test="${val}"]`)
)


test('counter component renders without error', () => {
    const wrapper = setup()
    const counterComponent = findByTestAttr(wrapper, 'component-counter')
    expect(counterComponent.length).toBe(1)
})

test('renders increment button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
})

test('renders decrement button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'decrement-button')
    expect(button.length).toBe(1)
})

test('renders counter display', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
    const wrapper = setup()
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
})

test('clicking button increment counter display', () => {
    const counter = 7
    const wrapper = setup(null, { counter })
    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(0)
})

test('clicking button decrements the counter display', () => {
    const counter = 1
    const wrapper = setup(null, { counter })
    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter - 1)
})

test('clicking decrement button cannot go below zero', () => {
    const counter = 0
    const wrapper = setup(null, { counter })
    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(1)
})




