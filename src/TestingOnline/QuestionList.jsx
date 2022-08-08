import isEmpty from "lodash.isempty";
import React, { Component, PureComponent } from "react";
import FillInBlank from "./FillInBlank";
import MultipleChoice from "./MultipleChoice";
import { connect } from "react-redux";

export class QuestionList extends Component {
	render() {
		return (
			<div>
				{/* Đấu ? là optional chaining. Khi xử lý, nếu questionList có giá trị thì sẽ map,
				nếu không (undefine, null) thì nó sẽ ngưng tại trước hàm map */}
				{this.props.questionList?.map((item, index) => {
					if (item.questionType === 1)
						return (
							<MultipleChoice
								key={item.id}
								question={item}
								index={index + 1}
							/>
						);
					return (
						<FillInBlank
							key={item.id}
							question={item}
							index={index + 1}
						/>
					);
				})}

				{this.props.answerList.map((item) => (
					<div style={{ display: "flex" }}>
						<h1>{item.questionId}</h1>
						<h2>{item.answerId}</h2>
					</div>
				))}
			</div>
		);
	}
}

// lụm data trên store xuống, và chuyển thành props của QuestionList
// tham số state đại diện toàn bộ dữ liệu trên store
const mapStateToProps = (state) => {
	return {
		// propName: state
		questionList: state.question.questionList,
		answerList: state.answer.testAnswers,
	};
};

export default connect(mapStateToProps)(QuestionList);
