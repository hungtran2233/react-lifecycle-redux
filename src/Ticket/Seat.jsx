import React, { Component } from "react";
import { connect } from "react-redux";
// CSS
import seatStyle from "./css/Seat.module.css";

export class Seat extends Component {
	handleClick = (event) => {
		// Đổi màu qua lại button khi click
		let foundSeat = this.props.selectedList.find(
			(item) => item.seatId === event.target.value
		);

		if (!foundSeat) {
			event.target.style.backgroundColor = "green";
		} else {
			event.target.style.backgroundColor = "white";
		}

		const seatItem = {
			seatId: event.target.value,
			price: this.props.seatValue.gia,
			// gui len trang thai đang đặt: placing
			seatStatus: true,
		};

		this.props.dispatch({
			type: "UPDATE_SELECTED",
			payload: seatItem,
		});
	};

	render() {
		const { seatValue, seatNumber } = this.props;

		// Cho màu đỏ với seat có thuộc tính daDat = true
		const objStyle = {
			backgroundColor: "red",
		};

		return (
			<div className={seatStyle.seat_main}>
				<button
					style={seatValue.daDat ? objStyle : null}
					onClick={this.handleClick}
					value={seatValue.soGhe}
				>
					{seatNumber}
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedList: state.selected.selectedSeatList,
	};
};

export default connect(mapStateToProps)(Seat);
