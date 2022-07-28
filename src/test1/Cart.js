import React, { Component } from "react";

export class Cart extends Component {
	// render cart item: [{}, {}] => [div, div]
	renderCart = () => {
		const cartHTML = this.props.addToCart.map((item) => {
			return (
				<tr key={item.product.id}>
					<td>{item.product.id}</td>
					<td>{item.product.name}</td>
					<td>
						<img
							src={item.product.image}
							width="120px"
							height="80px"
							alt=""
						></img>
					</td>
					<td>
						<button className="btn btn-info">-</button>
						<span className="fs-5 mx-2">{item.quantity}</span>
						<button className="btn btn-info">+</button>
					</td>
					<td>{item.product.price}</td>
					<td>{item.product.price * item.quantity}</td>
					<td>
						<button
							onClick={() =>
								this.props.deleteCartItem(item.product.id)
							}
							className="btn btn-danger"
						>
							X
						</button>
					</td>
				</tr>
			);
		});
		return cartHTML;
	};

	render() {
		return (
			<div
				className="modal fade"
				id="cartModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl">
					<div className="modal-content ">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Cart
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">
							<table className="table ">
								<thead>
									<tr>
										<th>Product Id</th>
										<th>Product Name</th>
										<th>Product Image</th>
										<th>Quantity</th>
										<th>Price</th>
										<th>Total</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>{this.renderCart()}</tbody>
							</table>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Pay
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;
