import React, { Component } from "react";

export class ProductItem extends Component {
	render() {
		const { name, price, image } = this.props.prod;

		return (
			<div className="card mb-4 p-3">
				<img src={image} width="200px" height="150px" alt=""></img>
				<h4>{name}</h4>
				<h5>${price}</h5>
				<div>
					<button
						onClick={() => {
							this.props.selectedProduct(this.props.prod);
						}}
						data-bs-toggle="modal"
						data-bs-target="#detailModal"
						className="btn btn-info mx-2"
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
