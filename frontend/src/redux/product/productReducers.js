const INITIAL_STATE = {
    currentProduct: null,
    currentSeller: null
}

const productReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_PRODUCT':
            return {
                ...state,
                currentProduct: action.payload
            }
        
        case 'SET-SELLER':
            return {
                ...state,
                currentSeller: action.payload
            }

        case 'MODIFY_PRODUCT':
            return{
                currentProduct: action.payload.currentProduct,
                currentSeller: action.payload.currentSeller
            }

        default:
            return state
    }
}

export default productReducer