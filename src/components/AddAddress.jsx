import React, { Component } from 'react';

export default class AddAddress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			address: '',
			number: ''
		}
		this._change = this._change.bind(this);
		this._click = this._click.bind(this);
	}

	_change(e) {
		let type = e.target.getAttribute('name');
		let value = e.target.value.trim();
		switch (type) {
			case 'name':
				this.setState({
					name: value
				});
				break;
			case 'address':
				this.setState({
					address: value
				});
				break;
			case 'number':
				this.setState({
					number: value
				});
				break;
			default:
				break;
		}
	}

	_click() {
		let _name = this.state.name;
		let _address = this.state.address;
		let _number = this.state.number;
		if (_name.length && _address.length && _number.length) {
			this.props.onSave({
				name: _name,
				address: _address,
				number: _number
			});
			this.setState({
				name: '',
				address: '',
				number: ''
			});
		} else {
			alert('请把数据填完整');
		}
	}

	render() {
		return (
			<div className="addAddress tableRow">
				<div className="grid">
					<input type="text" value={this.state.name} placeholder="姓名" onChange={this._change} name="name" />
				</div>
				<div className="grid">
					<input type="text" value={this.state.address} placeholder="住址" onChange={this._change} name="address" />
				</div>
				<div className="grid">
					<input type="number" value={this.state.number} maxLength="11" placeholder="电话" onChange={this._change} name="number" />
				</div>
				<div className="grid func">
					<span className="save" onClick={this._click}>保存</span>
				</div>
			</div>
			)
	}
}