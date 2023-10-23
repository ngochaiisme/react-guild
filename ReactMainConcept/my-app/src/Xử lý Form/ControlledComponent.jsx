import React from 'react'
export default class BasicControlledComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    handleSubmit = (event) => {
        alert('Name: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">Name</label>
                    <input
                        name="input"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
