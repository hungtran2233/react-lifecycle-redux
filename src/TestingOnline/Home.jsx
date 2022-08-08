import React, { Component } from "react";
import QuestionList from "./QuestionList";
import axios from "axios";
// Kết nối với Store
import { connect } from "react-redux";
import Result from "./Result";

export class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="p-5">
				<h1 className="display-2">Trắc nghiệm online</h1>
				<QuestionList />
				<button
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					className="btn btn-success"
				>
					Nộp bài
				</button>
				<Result />
			</div>
		);
	}

	fetchQuestions = async () => {
		try {
			const res = await axios({
				url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions?fbclid=IwAR1v60ZFhNfiNCKe0NILDrU6p0YfCTI3PXYlXxAKc1Cf8cSr8mPNEF8k58s",
				method: "GET",
			});

			// Tạo một action để đẩy lên store
			const action = {
				// type: mô tả gì đó (bắt buộc phải có), phải phân biệt với type khác
				type: "UPDATE_QUESTION_LIST",
				// payload: data gửi lên
				payload: res.data,
			};
			this.props.dispatch(action);
		} catch (err) {}
	};

	componentDidMount() {
		this.fetchQuestions();
	}
}

export default connect()(Home);
