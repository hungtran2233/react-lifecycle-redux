import { indexOf } from "lodash";

const initialState = {
	selectedSeatList: [],
};

const reducer = function (currentState = initialState, action) {
	// Mỗi lần click tại bất kì component nào có phương thức mapDispatchToProps
	// thì nó đều gọi lên tất cả reducer. Do đó nó sẽ dựa vào type, ứng với type nào
	// thì nó sẽ xử lý type đó
	switch (action.type) {
		// Case Đặt chỗ
		case "UPDATE_SELECTED": {
			// action.payload = {seatId}
			let cloneSelected = [...currentState.selectedSeatList];
			// Kiem tra xem seat đó đã được chọn chưa
			let foundSeat = cloneSelected.find(
				(item) => item.seatId === action.payload.seatId
			);
			let index = cloneSelected.indexOf(foundSeat);

			// Nếu đã chọn rồi thì khi click lại sẽ xóa phần tử đó, nếu chưa chọn thì
			// thêm tiếp vào mảng selectedSeatList[]
			if (foundSeat) {
				cloneSelected.splice(index, 1);
			} else {
				cloneSelected.push(action.payload);
			}
			return { ...currentState, selectedSeatList: cloneSelected };
		}
		/////////////////////////////////
		// Case Hủy đặt chỗ
		case "DELETE_SEAT": {
			console.log(currentState);
			// tạo ra một mảng copy
			let cloneSeatBill = [...currentState.selectedSeatList];
			// xóa dữ liệu trên mảng copy
			cloneSeatBill.splice(action.payload, 1);
			// console.log(cloneSeatBill);
			// Trả về dữ liệu để render ra giao diện
			return { ...currentState, selectedSeatList: cloneSeatBill };

			// return { ...currentState, selectedSeatList: cloneSeatBill };
		}

		default:
			return currentState;
	}
};

export default reducer;
