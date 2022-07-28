import React, { Component } from "react";
import style from "./changeGlassesStyle.css";
import glasses from "../assets/dataGlasses.json";

// img
import background from "../assets/glassesImage/background.jpg";
import g1 from "../assets/glassesImage/g1.jpg";
import g2 from "../assets/glassesImage/g2.jpg";
import g3 from "../assets/glassesImage/g3.jpg";
import g4 from "../assets/glassesImage/g4.jpg";
import g5 from "../assets/glassesImage/g5.jpg";
import g6 from "../assets/glassesImage/g6.jpg";
import g7 from "../assets/glassesImage/g7.jpg";
import g8 from "../assets/glassesImage/g8.jpg";
import g9 from "../assets/glassesImage/g9.jpg";
import model from "../assets/glassesImage/model.jpg";
import v1 from "../assets/glassesImage/v1.png";
import v2 from "../assets/glassesImage/v2.png";
import v3 from "../assets/glassesImage/v3.png";
import v4 from "../assets/glassesImage/v4.png";
import v5 from "../assets/glassesImage/v5.png";
import v6 from "../assets/glassesImage/v6.png";
import v7 from "../assets/glassesImage/v7.png";
import v8 from "../assets/glassesImage/v8.png";
import v9 from "../assets/glassesImage/v9.png";

export class ChangeGlasses extends Component {
	state = {
		glassesImg: g1,
	};

	changeGlasses = (img) => {
		this.setState({
			glassesImg: img,
		});
	};
	////////////
	renderGlasses = () => {
		const glassesHTML = glasses.map((item) => {
			return (
				<div key={item.id} className="item">
					<div className="item-card">
						<img src={g1} alt=""></img>
						<h3>{item.name}</h3>
						<h3>{item.price}</h3>
					</div>
				</div>
			);
		});

		return glassesHTML;
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="main">
							<h1 className="title">TRY GLASSES APP ONLINE</h1>
							<div className="main-body">
								<div className="left">
									<img src={model}></img>
								</div>
								<div className="right">
									<img src={this.state.glassesImg}></img>
								</div>
							</div>
							<div className="main-footer">
								{this.renderGlasses()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ChangeGlasses;
