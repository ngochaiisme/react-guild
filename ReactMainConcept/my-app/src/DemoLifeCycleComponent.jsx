import React from 'react'

export default class DemoLifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        console.log('contructor...')
    }

    componentDidMount() {
        console.log('componentDidMound...')
        setTimeout(() => {
            this.setState({ count: 1 })
        }, 2000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate...')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount...')
    }
    render() {
        console.log('render')
        return <div>Component Lifecycle:{this.state.count}</div>
    }
}
