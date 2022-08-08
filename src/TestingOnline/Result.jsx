// TODO:
// 1. Tạo giao diện modal bs
// 2. Connect store, lấy questionList + testAnswers
// 3. Kiểm tra: dựa vào questionId => question, dựa vào answerId => exact
// 4. Render điểm ra màn hình
import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
	// Duyet mang dap an

	checkExact = () => {
		let questionList_c = this.props.questionList;
		let answerList_c = this.props.answerList;

		let result = 0;
		answerList_c.forEach((itemA) => {
			let idQues = itemA.questionId;
			let idAns = itemA.answerId;

			questionList_c.forEach((itemQ) => {
				if (itemQ.id === idQues) {
					if (itemQ.answers === idAns) {
						result++;
					}
				}
			});
		});
		return <div>{result}</div>;
	};

	render() {
		return (
			<div>
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Result
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">{this.checkExact()}</div>

							{/* End modal body */}

							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		questionList: state.question.questionList,
		answerList: state.answer.testAnswers,
	};
};

export default connect(mapStateToProps)(Result);
