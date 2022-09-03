const initialState = {
    username: "",
    email: "",
    passwrod: "",
    contact: "",
    uid: "",
    showloader: true,
    persnalNotes: []
};

const fetchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_FROM_FIRESTORE":
            if(!action.payload){
                return {
                    ...state,
                    showloader: false
                }
            } else {
                return {
                    ...state,
                    username: action.payload.username,
                    passwrod: action.payload.passwrod,
                    email: action.payload.email,
                    contact: action.payload.contact,
                    uid: action.payload.uid,
                    showloader: false,
                }
            }

        case "LOGOUT_USER_STORE_EMPTY":
            return {
                ...state,
                username: "",
                email: "",
                passwrod: "",
                contact: "",
                uid: "",
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