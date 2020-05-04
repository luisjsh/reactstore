const INITIAL_STATE = {
    currentSearch: null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_SEARCH':
            return {
                ...state,
                currentSearch: action.payload
            }

        case 'MODIFY_SEARCH':
            return{
                ...state,
                currentSearch: action.payload
            }

        default:
            return state
    }
}

export default userReducer