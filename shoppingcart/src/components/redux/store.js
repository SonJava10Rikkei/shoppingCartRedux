// REDUCER
// là một Function
const initValue = { value: 0 }

const rootReducer = (state = initValue, action) => {
    /**
     * {
     * type: 'todoList/increment',
    payload: 10;
    *}
     */

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: action.value + 1
            }
        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload,
            }

        // time-travel debugging

        /**
         * return {
         * ...state,
        value: state.value + 1 + Date.now()        
         *}
         */

        // => {
        // value: 1
        // }
        // state.value = state.value + 1;
        // return state;

        // Math.random(), Date.now()
        // Request toi' server

        // PURE FUNCTION

        default:
            return state;
    }
}

// ACTION
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10,
}

// Action creators
const increamentCreator = (data) => {
    return {
        type: 'todoList/increment123',
        payload: data,
    };
};

increamentCreator(10);

// DISPATCH
// la 1 function

dispatch(increamentCreator(15))