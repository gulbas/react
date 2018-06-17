import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };
    }

    handlePlusClick = (e) => {
        const {counter} = this.state;
        this.setState({
            counter: counter + 1
        });
        this.state.counter++;
        e.preventDefault();
    };

    handleMinusClick = (e) => {
        const {counter} = this.state;
        this.setState({
            counter: counter - 1
        });
        e.preventDefault();
    };

    render() {
        const {counter} = this.state;
        return (
            <div>
                <button onClick={this.handleMinusClick}>-</button>
                {counter}
                <button onClick={this.handlePlusClick}>+</button>
            </div>
        );
    }
}