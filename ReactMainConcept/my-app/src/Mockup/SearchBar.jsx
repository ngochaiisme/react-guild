import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        const { searchText, inStock, handleChange } = this.props
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleChange}
                    name="product"
                />
                <div>
                    <input
                        type="checkbox"
                        value={inStock}
                        name="in stock"
                        onChange={handleChange}
                    />
                    Only show products in stock
                </div>
            </form>
        )
    }
}

export default SearchBar
