import React, { Component } from 'react';

class Stuff extends Component {
    state = {
        myFaveNumber: 5
    }
    handleIncrement = () => {
        this.setState({ myFaveNumber: this.state.myFaveNumber + 1 });
    }

    handleDecrement = () => {
        this.setState({ myFaveNumber: this.state.myFaveNumber - 1 });
    }

    render() {
        return (
            <div>
                <h1>myFaveNumber: {this.state.myFaveNumber}</h1>
                <button onClick={this.handleIncrement}>Up</button>
                <button onClick={this.handleDecrement}>Down</button>
            </div>
        )
    }
}

export default Stuff;