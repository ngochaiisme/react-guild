import React, { Component } from 'react'

export class CategoryRow extends Component {
    render() {
        return (
            <tr>
                <th colSpan={2}>{this.props.category}</th>
            </tr>
        )
    }
}

export default CategoryRow
