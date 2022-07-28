import React, { Component } from "react";

export class ProductItem extends Component {
	render() {
		const { name, price, image } = this.props.prod;
		return (
			<div className="card mb-4 p-3">
				<img src={image}></img>
				<h5>{name}</h5>
				<h5>${price}</h5>
				<div>
					<button
						onClick={() =>
							this.props.selectProduct(this.props.prod)
						}
						className="btn btn-info me-3"
					>
						Detail
					</button>
					<button
						onClick={() => this.props.addToCart(this.props.prod)}
						className="btn btn-dark"
					>
						Add to cart
					</button>
				</div>
			</div>
		);
	}
}

export default ProductItem;
