const counterReducer = (state = 50, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state = state + 1
            case 'INCREMENT_STEPS':
                return state = state + action.payload
        case 'DECREMENT':
            return state = state - 1
        default:
            return state
    }
}

export default counterReducer;