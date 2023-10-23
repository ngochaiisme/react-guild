import React, { Component } from 'react'

const numbers = [5, 11, 2002]

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />)

    return <ul>{listItems}</ul>
}

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <NumberList numbers={[5, 11, 2002]} />
            </div>
        )
    }
}
