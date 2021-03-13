// When first going to website (Initially)
export const initialState = {
    user: null,
};

// Types of actions that can be dispatched
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    // console.log("Received an action: ", action); // Avoid showing the action in console as it could contain user data
    switch(action.type) {
        case actionTypes.SET_USER: 
            return { // Returns a new data layer for specific action
                ...state, // Return current state
                user: action.user, // Change user to whatever we passed in as the user payload from the action we dispatched
            };
            
        default:
            return state;
    }
};

export default reducer;