import React, { Component } from 'react';
import TableHead from './TableHead';
import AddAddress from './AddAddress';
import TableBody from './TableBody';
import AddressBookActions from '../actions/AddressBookActions';
import AddressBookStore from '../stores/AddressBookStore';

function getAllData() {
	return {
		addressList: AddressBookStore.getAllData()
	}
}

export default class AddressBook extends Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		AddressBookStore.addChangeListener(this._onChange);
		this.state = {
			addressList: []
		}
	}
	componentDidMount() {
	    this.setState(getAllData());
	}
	_onChange() {
		this.setState(getAllData());
	}
	_save(info) {
		AddressBookActions.save(Date.now(), info);
	}
	_del(_id) {
		AddressBookActions.del(_id);
	}
	render() {
		return(
			<div>
				<TableHead />
				<AddAddress onSave={this._save} />
				<TableBody onDel={this._del} addressList={this.state.addressList} />
			</div>
			)
	}
}