import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// Import reducer  Testing online
import questionReducer from "./TestingOnline/redux/questionReducer";
import answerReducer from "./TestingOnline/redux/answerReducer";

// Reducer Ticket
import seatReducer from "./Ticket/reduxTicket/seatReducer";
import selectedReducer from "./Ticket/reduxTicket/selectedReducer";

const rootReducer = combineReducers({
	// khai báo reducers
	// key: reducer
	// TestingOnline
	// question: questionReducer,
	// answer: answerReducer,

	// Ticket
	seat: seatReducer,
	selected: selectedReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
