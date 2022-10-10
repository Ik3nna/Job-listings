const reducer = (state,action)=>{

    if (action.type === "ADD_TAG") {
        if (!state.list.includes(action.payload)) {
            return {...state, list: [...state.list, action.payload]}
        }
        return state;
    }
    if (action.type === "REMOVE_TAG") {
        return {...state, list: state.list.filter((item)=> item !== action.payload)}
    }
    if (action.type === "CLEAR_ALL") {
        return {...state, list: []}
    }
    return state;
}

export default reducer;