const reducer = (state,action)=>{

    switch(action.type) {
        case "ADD_TAG":
            if (!state.list.includes(action.payload)) {
                const list = [...state.list, action.payload];
                return { ...state, list: list }
            } else 
                return state;
        case "REMOVE_TAG":
            const list = state.list.filter(item => item !== action.payload);
            return { ...state, list: list }
        default:
            return state
    }

    // if (action.type === "ADD_TAG") {
    //     if (!state.includes(action.payload)) {
    //         return [...state, action.payload]
    //     }
    //     return state;
    // }
    // return state;
}

export default reducer;