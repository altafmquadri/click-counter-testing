import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        error: false
    }

    incrementCount = () => (this.setState(prevState => ({ counter: prevState.counter + 1, error: false })))
    decrementCount = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 })
        }
        else {
            this.setState({ error: true })
        }
    }

    render() {
        return (
            <div data-test="component-counter">
                <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
                <button onClick={this.incrementCount} data-test="increment-button">Increment counter</button>
                <button onClick={this.decrementCount} data-test="decrement-button">Decrement counter</button>
                {this.state.error && <h1 style={{ color: 'red' }} data-test="error-message">You can't go below zero</h1>}
            </div>
        )
    }
}

export default Counter