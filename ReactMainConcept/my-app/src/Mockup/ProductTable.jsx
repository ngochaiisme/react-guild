import React, { Component, Fragment } from 'react'
import CategoryRow from './CategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    render() {
        const { productList, searchText, inStock } = this.props

        let lastCategory = null
        const rows = []
        productList.forEach((item) => {
            if (inStock && !item.stocked) return
            if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return

            if (item.category !== lastCategory) {
                rows.push(<CategoryRow key={item.category} category={item.category} />)
            }
            rows.push(<ProductRow key={item.name} productItem={item} />)

            lastCategory = item.category
        })

        // let lastCategory = null
        // const rows = productList.map((item) => {
        //     if (item.category !== lastCategory) {
        //         lastCategory = item.category
        //         return (
        //             <Fragment key={item.name}>
        //                 <CategoryRow category={item.category} />
        //                 <ProductRow productItem={item} />
        //             </Fragment>
        //         )
        //     }
        //     return <ProductRow productItem={item} key={item.name} />
        // })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default ProductTable
