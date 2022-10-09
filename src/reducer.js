const reducer = (state,action)=>{

    if (action.type === "ADD_TAG") {
        if (!state.includes(action.payload)) {
            return [...state, action.payload]
        }
        return state;
    }
    return state;
}

export default reducer;