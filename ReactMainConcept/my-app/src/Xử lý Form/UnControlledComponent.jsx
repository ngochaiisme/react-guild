import React from 'react'

export default class BasicUncontrolInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input defaultValue="Bob" type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
        }
        this.fileInput = React.createRef()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()

        //
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile)

        //detailt
        console.log(this.state.selectedFile)
    }

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} onChange={this.onFileChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
