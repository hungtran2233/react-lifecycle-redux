import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
	//////
	renderProduct = () => {
		return this.props.products.map((item) => {
			return (
				<div key={item.id} className="col-3">
					<ProductItem
						prod={item}
						selectProduct={this.props.selectProduct}
						addToCart={this.props.addToCart}
					/>
				</div>
			);
		});
	};

	render() {
		return <div className="row">{this.renderProduct()}</div>;
	}
}

export default ProductList;
