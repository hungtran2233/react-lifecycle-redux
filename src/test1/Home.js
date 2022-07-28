import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export class Home extends Component {
	/////
	products = [
		{
			id: 1,
			name: "Adidas Prophere",
			alias: "adidas-prophere",
			price: 350,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 995,
			image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
		},
		{
			id: 2,
			name: "Adidas Prophere Black White",
			alias: "adidas-prophere-black-white",
			price: 450,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 990,
			image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
		},
		{
			id: 3,
			name: "Adidas Prophere Customize",
			alias: "adidas-prophere-customize",
			price: 375,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 415,
			image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
		},
		{
			id: 4,
			name: "Adidas Super Star Red",
			alias: "adidas-super-star-red",
			price: 465,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 542,
			image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
		},
		{
			id: 5,
			name: "Adidas Swift Run",
			alias: "adidas-swift-run",
			price: 550,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 674,
			image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
		},
		{
			id: 6,
			name: "Adidas Tenisky Super Star",
			alias: "adidas-tenisky-super-star",
			price: 250,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 456,
			image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
		},
		{
			id: 7,
			name: "Adidas Ultraboost 4",
			alias: "adidas-ultraboost-4",
			price: 450,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 854,
			image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
		},
		{
			id: 8,
			name: "Adidas Yeezy 350",
			alias: "adidas-yeezy-350",
			price: 750,
			description:
				"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			shortDescription:
				"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			quantity: 524,
			image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
		},
		{
			id: 9,
			name: "Nike Adapt BB",
			alias: "nike-adapt-bb",
			price: 630,
			description:
				"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			shortDescription: "Paul George is the rare high-percentage shooter",
			quantity: 599,
			image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
		},
		{
			id: 10,
			name: "Nike Air Max 97",
			alias: "nike-air-max-97",
			price: 650,
			description:
				"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			shortDescription: "Paul George is the rare high-percentage shooter",
			quantity: 984,
			image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
		},
		{
			id: 11,
			name: "Nike Air Max 97 Blue",
			alias: "nike-air-max-97-blue",
			price: 450,
			description:
				"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			shortDescription: "Paul George is the rare high-percentage shooter",
			quantity: 875,
			image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
		},
		{
			id: 12,
			name: "Nike Air Max 270 React",
			alias: "nike-air-max-270-react",
			price: 750,
			description:
				"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			shortDescription: "Paul George is the rare high-percentage shooter",
			quantity: 445,
			image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
		},
	];

	state = {
		selectedProduct: {},
		cart: [],
	};

	//Detail:  Truyền data từ ProductItem -> ProductList -> Home
	selectedProduct = (prodFromItem) => {
		this.setState({
			selectedProduct: prodFromItem,
		});
	};

	// Add to cart
	// 1. Tạo hàm, đưa hàm từ home -> list -> item
	// 2. Lấy data từ item -> list -> home, sau đó đưa data từ home -> cart
	addToCart = (prodFromItem) => {
		// đối tượng trong cart có dạng: cart = [{product: prod, quantity: 1}]
		// Tạo một mảng mới, lưu cart
		const cloneCart = [...this.state.cart];
		// Tìm product
		const foundItem = cloneCart.find((item) => {
			// hàm này trả về một object product
			return item.product.id === prodFromItem.id;
		});

		// Thêm vào state
		if (foundItem) {
			foundItem.quantity += 1;
		} else {
			let cartItem = {
				product: prodFromItem,
				quantity: 1,
			};
			// Thêm product vào cart
			cloneCart.push(cartItem);
		}

		// Cập nhật lại state cart
		this.setState({ cart: cloneCart }, () => {
			//console.log(this.state.cart);
		});
	};

	// Delete cart
	// Tạo hàm home->cart , từ cart nhận vào tham số truyền ngược vào home
	deleteCartItem = (prodIdFromCart) => {
		const cloneCart = [...this.state.cart];
		// Tim product trong cart
		const foundItem = cloneCart.find((item) => {
			return item.product.id === prodIdFromCart;
		});

		// Tim index cua product
		const index = cloneCart.indexOf(foundItem);
		// Xoa product khoi cart
		if (foundItem) {
			cloneCart.splice(index, 1);
		}

		// Cap nhat lai state cart
		this.setState({ cart: cloneCart }, () => {
			console.log(this.state.cart);
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Danh sách sản phẩm</h1>
				<button
					data-bs-toggle="modal"
					data-bs-target="#cartModal"
					className="btn btn-success my-3"
				>
					Giỏ hàng (0)
				</button>

				<ProductList
					products={this.products}
					selectedProduct={this.selectedProduct}
					addToCart={this.addToCart}
				/>

				{this.state.selectedProduct && (
					<ProductDetail
						selectedProduct={this.state.selectedProduct}
					/>
				)}

				<Cart
					addToCart={this.state.cart}
					deleteCartItem={this.deleteCartItem}
				/>
			</div>
		);
	}
}

export default Home;
