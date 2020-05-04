const INITIAL_STATE = {
    currentUser: localStorage.getItem('currentUser')
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            
            return {
                ...state,
                currentUser: action.payload
            }

        case 'MODIFY_USER':
            localStorage.setItem('currentUser', action.payload)
            return{
                ...state,
                currentUser: action.payload
            }

        case 'LOG_OUT':
            localStorage.removeItem('currentUser')
            return{
                ...state,
                currentUser: null
            }
        default:
            return state
    }
}

export default userReducer