import React, { Component } from 'react';

export default class TableBody extends Component {
	constructor(props) {
		super(props);
		this._del = this._del.bind(this);
	}

	_del(e) {
		let _id = e.target.parentNode.parentNode.getAttribute('data-id');
		this.props.onDel(Number(_id));
	}

	render() {
		let me = this;
		let _list = this.props.addressList;
		let array = [];
		for (let id in _list) {
			let item = {};
			item['_id'] = id;
			for (let k in _list[id]) {
				item[k] = _list[id][k];
			}
			array.push(item);
		}
		var addressList = array.map(function(item) {
			return (
				<div className="tableBody tableRow" data-id={item._id} key={item._id}>
					<div className="grid">{item.name}</div>
					<div className="grid">{item.address}</div>
					<div className="grid">{item.number}</div>
					<div className="grid func">
						<span className="del" onClick={me._del}>删除</span>
					</div>
				</div>
				)
		})
		return (
			<div>
				{addressList}
			</div>
			)
	}
}