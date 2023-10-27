import React, { Component } from 'react'
// import './ProductList.css'
import styles from './Product.module.scss'
export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                ProductList
                <div className={styles.productlist}>
                    <div className={styles.productItem}>Item</div>
                    <div className={styles.productItem}>Item</div>
                    <div className={styles.productItem}>Item</div>
                    <div className={styles.productItem}>Item</div>
                    <div className={styles.productItem}>Item</div>
                </div>
            </div>
        )
    }
}
