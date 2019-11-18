import React, { Component } from 'react';

class Todo extends Component{

    handleChange(e) {
        this.setState({inputValue: e.target.value})
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return(
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.handleClick.bind(this )}>submit</button>
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>
                                <span>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;