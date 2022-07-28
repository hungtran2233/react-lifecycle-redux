import React, { Component } from "react";
import products from "../assets/products.json";

// console.log(products);

export class ProductList extends Component {
	// Chuyển đổi [{}, {}, {}]  => [div, div, div]
	// Chuyển mảng object thành mảng mới chứa các div

	renderProducts = () => {
		const productHTML = products.map((item) => {
			return (
				<div key={item.id} className="col-4">
					<div className="item card">
						<img src={item.img} alt=""></img>
						<h3>{item.name}</h3>
						<p>{item.desc}</p>
					</div>
				</div>
			);
		});

		//console.log(products);

		return productHTML;
	};

	render() {
		return (
			<div className="container">
				<div className="row">{this.renderProducts()}</div>
			</div>
		);
	}
}

export default ProductList;
