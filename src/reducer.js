const reducer = (state=33, action) => {
    switch (action.type) {
        case 'INC': return state + 5;
        case 'DEC': return state - 5;
        case 'RND': return state + action.value;
        default: return state;
        }
    };

export default reducer;