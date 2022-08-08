const initialState = {
	questionList: [],
};

// shallow comparison: so sanh nong
const reducer = function (currentState = initialState, action) {
	// nhận action, chỉnh sửa currentState
	// return newState
	// action = {type, payload}
	switch (action.type) {
		case "UPDATE_QUESTION_LIST":
			currentState.questionList = action.payload;
			// return currentState;
			return { ...currentState };
		default:
			return currentState;
	}
};

export default reducer;
