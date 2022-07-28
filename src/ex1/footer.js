// rce  + rafce
import React, { Component } from "react";

export class Footer extends Component {
	name = "Hieu";
	age = 12;
	showMessage() {
		alert("Hello ban");
	}

	showMessage2(message) {
		alert(message);
	}

	render() {
		return (
			<div>
				<h1>Footer</h1>
				<p>Name: {this.name}</p>
				<p>Name: {this.age}</p>

				<button onClick={this.showMessage}>Show message 1</button>
				<button
					onClick={function () {
						this.showMessage2("doi nhu mo");
					}}
				>
					Show message
				</button>
			</div>
		);
	}
}

export default Footer;
