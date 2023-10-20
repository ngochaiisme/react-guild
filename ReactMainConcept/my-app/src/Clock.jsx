import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: {
                created: new Date().toLocaleTimeString(),
            },
            seconds: {
                created: new Date().getSeconds(),
            },
        }
        this.date = '05/11/02'
    }
    render() {
        return (
            <div>
                <h1> Hello World</h1>
                <h2>It is {this.state.time.created}</h2>
                <h2>It is {this.state.seconds.created}</h2>
                <button onClick={this.getTime}>Get Time</button>
            </div>
        )
    }

    getTime = () => {
        const newTime = {
            created: new Date().toLocaleTimeString(),
        }
        const newSeconds = {
            created: new Date().getSeconds(),
        }
        this.setState({
            time: newTime,
            seconds: newSeconds,
        })
    }
}
