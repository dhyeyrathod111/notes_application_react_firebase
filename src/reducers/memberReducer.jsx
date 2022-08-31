const initialState = {
    username: "",
    email: "",
    passwrod: "",
    contact: "",
    uid: "",
    showLoginPage: false,
    persnalNotes: []
};

const fetchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_FROM_FIRESTORE":
            return {
                ...state,
                username: action.payload.username,
                passwrod: action.payload.passwrod,
                email: action.payload.email,
                contact: action.payload.contact,
                uid: action.payload.uid,
                showLoginPage: false
            }

        case "LOGOUT_USER_STORE_EMPTY":
            return {
                username: "",
                email: "",
                passwrod: "",
                contact: "",
                uid: "",
                showLoginPage: true
            }

        case "SHOW_LOGIN_PAGE":
            return {
                ...state,
                showLoginPage: true
            }

        case "FETCH_ALL_USER_NOTE":
            return {
                ...state,
                persnalNotes: action.payload
            }
        default: return state;
    }
}
export default fetchUserReducer;