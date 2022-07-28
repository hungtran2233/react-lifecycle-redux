import React, { Component } from "react";

export class ProductDetail extends Component {
	render() {
		const { id, name, price, image, description } =
			this.props.selectedProduct;

		return (
			<div
				className="modal fade"
				id="detailModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Chi tiết sản phẩm
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">
							<h4>Product ID: {id}</h4>
							<img
								src={image}
								width="200px"
								height="150px"
								alt=""
							></img>
							<h4>{name}</h4>
							<h4>${price}</h4>
							<label>Description: </label>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;
