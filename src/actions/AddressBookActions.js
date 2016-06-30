import AppDispatcher, { dispatch } from '../dispatcher/AppDispatcher';
import AddressBookConstants from '../constants/AddressBookConstants';

let AddressBookActions = {
	save: function(id, info) {
		
		AppDispatcher.dispatch({
			actionType: AddressBookConstants.SAVE,
			id: id,
			info: info
		});
	},

	del: function(_id) {
		console.log(_id)
		AppDispatcher.dispatch({
			actionType: AddressBookConstants.DEL,
			_id: _id
		});
	}
}
export default AddressBookActions;