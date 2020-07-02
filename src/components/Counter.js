import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }

    incrementCount = () => (this.setState(prevState => ({ counter: prevState.counter + 1 })))

    render() {
        return (
            <div data-test="component-counter">
                <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
                <button onClick={this.incrementCount} data-test="increment-button">Increment counter</button>
            </div>
        )
    }
}

export default Counter