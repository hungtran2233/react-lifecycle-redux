import React, { Component } from "react";
import redCar from "../assets/img/red-car.jpg";
import blackCar from "../assets/img/black-car.jpg";
import silverCar from "../assets/img/silver-car.jpg";
import steelCar from "../assets/img/steel-car.jpg";

import carStyle from "./changeCar.module.css";
import clsx from "clsx";

//console.log(carStyle);

/**
 * 1. Import 3 hình còn lại vào
 * 2. Tạo state (carImg = redCar), gán vào thẻ img
 * 3. Khi nhấn nút, state lại carImg thành hình tương ứng
 */

export class ChangeCar extends Component {
	state = {
		carImg: redCar,
	};

	changeCar = (img) => {
		this.setState(
			{
				carImg: img,
			},
			() => console.log(this.state.carImg)
		);
	};

	render() {
		return (
			<div>
				<img
					style={{
						width: 500,
						backgroundColor: "red",
						marginBottom: 120,
					}}
					src={this.state.carImg}
					alt=""
				></img>

				{/* Button change color  */}
				<div>
					<button
						className={clsx(
							carStyle.button,
							carStyle.text,
							carStyle.spacing,
							{ [carStyle.active]: this.state.carImg === redCar }
						)}
						onClick={() => {
							this.changeCar(redCar);
						}}
					>
						Red Car
					</button>
					<button
						className={clsx(
							carStyle.button,
							carStyle.text,
							carStyle.spacing,
							{
								[carStyle.active]:
									this.state.carImg === blackCar,
							}
						)}
						onClick={() => {
							this.changeCar(blackCar);
						}}
					>
						Black Car
					</button>
					<button
						className={clsx(
							carStyle.button,
							carStyle.text,
							carStyle.spacing,
							{
								[carStyle.active]:
									this.state.carImg === silverCar,
							}
						)}
						onClick={() => {
							this.changeCar(silverCar);
						}}
					>
						Silver Car
					</button>
					<button
						className={clsx(
							carStyle.button,
							carStyle.text,
							carStyle.spacing,
							{
								[carStyle.active]:
									this.state.carImg === steelCar,
							}
						)}
						onClick={() => {
							this.changeCar(steelCar);
						}}
					>
						Steel Car
					</button>
				</div>
			</div>
		);
	}
}

export default ChangeCar;
