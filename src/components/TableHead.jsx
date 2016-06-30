import React, { Component } from 'react';

export default class TableHead extends Component {
	render() {
		return (
			<div className="tableHead tableRow">
				<div className="grid">姓名</div>
				<div className="grid">住址</div>
				<div className="grid">电话</div>
				<div className="grid">操作</div>
			</div>
			)
	}
}