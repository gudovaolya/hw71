import * as actionTypes from './actionsTypes';

const initialState = {
    items: [],
    after: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PICS_REQUEST_SUCCES:
            return {
                ...state,
                items: [...state.items].concat(action.items),
                after: action.after
            };
        case actionTypes.NEXT_PICS_REQUEST_SUCCES:
            return {
                ...state,
                items: [...state.items].concat(action.nextItems),
                after: action.nextAfter
            };
        case actionTypes.PICS_REQUEST_ERROR:
            return state;
        default:
            return state;
    }
};

export default reducer;