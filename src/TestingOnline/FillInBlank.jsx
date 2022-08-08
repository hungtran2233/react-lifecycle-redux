import React, { Component } from "react";

export class FillInBlank extends Component {
	render() {
		const {
			question: { content, answers },
			index,
		} = this.props;
		return (
			<div className="mb-3">
				<h1 className="display-5">
					Câu {index}: {content}
				</h1>
				<input className="form-control w-50"></input>
			</div>
		);
	}
}

export default FillInBlank;
