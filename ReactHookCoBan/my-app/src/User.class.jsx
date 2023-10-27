import React, { Component } from 'react'

export default class UserClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 21,
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }))
    }

    render() {
        return (
            <div className="flex flex-col items-center justify-start">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">User Class Component</h1>
                    <a className="text-blue-600 hover:underline block">Name: Duong Ngoc Hai</a>
                    <a className="text-blue-600 hover:underline block">Age: {this.state.age} </a>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.handleClick}
                >
                    Click to increase Age
                </button>
            </div>
        )
    }
}
