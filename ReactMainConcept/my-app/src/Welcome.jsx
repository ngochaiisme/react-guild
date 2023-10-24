export class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fileInput = React.createRef()
        this.state = {
            // Initially, no file is selected
            selectedFile: null,
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData()

        // Update the formData object
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

        // Details of the uploaded file
        console.log(this.state.selectedFile)

        // Request made to the backend api
        // Send formData object
        // axios.post('api/uploadfile', formData)
    }

    onFileChange = (event) => {
        // Update the state
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
