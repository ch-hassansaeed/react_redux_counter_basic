export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const incrementSteps = (steps_count) => {
    return {
        type: 'INCREMENT_STEPS',
        payload:steps_count
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const signin = () => {
    return {
        type: 'SIGN_IN'
    };
};