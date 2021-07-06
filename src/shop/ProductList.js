import React, { Component } from "react";

export class ProductList extends Component {
    
    render() {
        if (this.props.products == null || this.props.products.length === 0){
            return <h5 className="p-2">No products</h5>
        }
        return this.props.products.map
    }
}