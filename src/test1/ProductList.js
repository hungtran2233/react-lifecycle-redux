import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
	//render product list : [{}, {}] ==> [div, div]
	renderProduct = () => {
		const productHTML = this.props.products.map((item) => {
			return (
				<div key={item.id} className="col-3">
					<ProductItem
						prod={item}
						selectedProduct={this.props.selectedProduct}
						addToCart={this.props.addToCart}
					/>
				</div>
			);
		});
		return productHTML;
	};

	render() {
		return <div className="row">{this.renderProduct()}</div>;
	}
}

export default ProductList;
