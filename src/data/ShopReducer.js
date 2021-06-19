import {ActionTypes} from "./Types";
const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ....storeData,
                []
            }
    }
}
