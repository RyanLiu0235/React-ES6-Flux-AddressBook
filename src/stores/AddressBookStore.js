import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AddressBookConstants from '../constants/AddressBookConstants';

// 添加初始数据
let AddressBook = {
    1467190265261: {
        name: 'Hubery',
        address: '湖北省武汉市',
        number: 130000000
    }
};

let CHANGE_EVENT = 'change';

/**
 * 保存数据
 * @param  {[number]} id   [数据对应ID]
 * @param  {[object]} info [数据详情]
 */
function save(id, info) {
    AddressBook[id] = info;
}

/**
 * 删除数据
 * @param  {[number]} _id [删除数据对应的ID]
 */
function del(_id) {
    delete AddressBook[_id];
}

const AddressBookStore = Object.assign({}, EventEmitter.prototype, {
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
