import React, { Component } from 'react'
// import './Cart.css'
// import './Cart.scss'
import styles from './Cart.module.css'
export default class Cart extends Component {
    render() {
        return (
            <div className={styles.error}>
                Cart
                <div className="button">
                    <div
                        className="button-item"
                        style={{
                            backgroundColor: 'red',
                            display: this.props.isShow ? 'inline-block' : 'none',
                        }}
                    >
                        hello
                    </div>
                </div>
            </div>
        )
    }
}
