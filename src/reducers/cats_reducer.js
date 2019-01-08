export const cats_reducer = function(state = [], action) {
    switch (action.type) {
        case "LOADING_CATS":
            return state
            break;

        case "FETCH_CATS":
            return [ ...state, ...action.cats ]
            break;
    
        default:
            return state
            break;
    }
}