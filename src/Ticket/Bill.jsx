import React, { Component } from "react";
import { connect } from "react-redux";
// CSS
import billStyle from "./css/Bill.module.css";

export class Bill extends Component {
	render() {
		return (
			<div className={billStyle.bill_main}>
				<table className="table">
					<thead>
						<tr>
							<th>Số ghế</th>

							<th>Giá</th>

							<th>Hủy</th>
						</tr>
					</thead>
					<tbody>
						{this.props.selectedList.map((item, index) => (
							<tr key={index}>
								<td>{item.seatId}</td>
								<td>{item.price}</td>
								<td>
									<button
										onClick={() =>
											this.props.deleteSeat(index)
										}
										className="btn btn-danger"
									>
										X
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td>Tổng tiền</td>
							<td>
								{this.props.selectedList.reduce(
									(totalBill, item) => {
										return (totalBill += item.price);
									},
									0
								)}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		seatList: state.seat.seatList,
		selectedList: state.selected.selectedSeatList,
	};
};

// Tạo ra phương thức đưa lên store
const mapDispatchToProps = (dispatch) => {
	return {
		deleteSeat: (index) => {
			const action = {
				type: "DELETE_SEAT",
				payload: index,
			};

			// console.log(action);
			// dua action len reducer
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
