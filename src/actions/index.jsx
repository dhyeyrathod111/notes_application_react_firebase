import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';




export const fetchUserActionCreater = user_id => {
    return async dispatch => {
        const userDocument = await getDoc(doc(db, "usersdata", user_id));
        const userID = await localStorage.getItem('userid');
        dispatch({
            type: "FETCH_USER_FROM_FIRESTORE",
            payload: { ...userDocument.data(), uid: userID }
        })
    }
}

export const fetchUsersAllNotesFromFirestore = (username, userid) => {
    return async dispatch => {
        let collectionName = username + "_" + userid; let notestobject = [];
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            let doc_id = doc.id; let doc_data = doc.data();
            notestobject.push({
                "noteid": doc_id,
                "usernotes": doc_data.notes
            });
        });
        dispatch({
            type: "FETCH_ALL_USER_NOTE",
            payload: { usernotes: notestobject }
        })
    }
}

export const userLogoutdoEmptyStore = props => {
    return {
        type: "LOGOUT_USER_STORE_EMPTY"
    }
}

export const showLoginPageToUsers = props => {
    return {
        type: "SHOW_LOGIN_PAGE"
    } 
}


