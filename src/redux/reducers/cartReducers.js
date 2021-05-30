import { SET_NEW_USER } from "../actions/userActions";

const initialState = {
    user: {
        name: "",
        email: "",
        photoURL: "",
        isNewUser: true,
        isLoggedIn: false,
        error: "",
    },
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_USER:
            const newUser = action.newUser;
            return {
                user: newUser,
            };

        default:
            return state;
    }
};

export default userReducers;
