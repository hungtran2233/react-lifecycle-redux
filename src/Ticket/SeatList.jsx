import React, { Component } from "react";
import Seat from "./Seat";
import { connect } from "react-redux";
// CSS
import seatListStyle from "./css/SeatList.module.css";

export class SeatList extends Component {
	render() {
		return (
			<div className={seatListStyle.seat_list_main}>
				<table id="seatBlock" className="table">
					<tbody>
						{this.props.props_seatList.map((item) => {
							return (
								<tr key={item.hang}>
									<td>{item.hang}</td>
									{item.danhSachGhe.map((item2, index) => {
										return (
											<td key={item2.soGhe}>
												<Seat
													seatValue={item2}
													seatNumber={index + 1}
												/>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		props_seatList: state.seat.seatList,
	};
};

export default connect(mapStateToProps)(SeatList);
