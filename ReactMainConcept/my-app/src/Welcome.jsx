import React from 'react'

// //Functianl component
// function Welcome(props) {
//     console.log(props)
//     return <h1>Hello, {props.name}</h1>
// }

//Class component
class Welcome extends React.Component {
    render() {
        console.log(this.props)
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default Welcome
