import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AddressBookConstants from '../constants/AddressBookConstants';
import assign from 'object-assign';

let AddressBook = {
    1467190265261: {
        name: 'Hubery',
        address: '湖北省武汉市洪山区光谷理想城',
        number: 130000000
    }
};
let CHANGE_EVENT = 'change';

function save(id, info) {
    AddressBook[id] = info;
}
function del(_id) {
    delete AddressBook[_id];
}

let AddressBookStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getAllData: function() {
        return AddressBook;
    },
    getData: function(id) {
        return AddressBook[id];
    },
    addChangeListener: function(callback) {
        this.addListener(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case AddressBookConstants.SAVE:
            save(action.id, action.info);
            AddressBookStore.emitChange();
            break;
        case AddressBookConstants.DEL:
            del(action._id);
            AddressBookStore.emitChange();
            break;
        default: 
            break;
    }
})
export default AddressBookStore;
