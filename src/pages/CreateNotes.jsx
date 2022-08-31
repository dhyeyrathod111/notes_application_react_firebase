import React, { useState } from 'react';
import { db } from '../firebase-config'
import SidebarMenu from '../component/SidebarMenu'
import NavigationHeader from '../component/NavigationHeader'
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from 'react-redux'
import AlertMessage from '../component/AlertMessage'
import { useNavigate } from 'react-router-dom';
const CreateNotes = props => {
    const myStoreData = useSelector(state => state.fetchUserReducer);
    const navigate = useNavigate();
    const [data, setData] = useState({
        notes: "",
    });
    const [alertmessageflag, setAlertmessageflag] = useState(false)
    const handleChnage = event => {
        event.preventDefault();
        let name = event.target.name;
        let textvalue = event.target.value;
        setData({ ...data, [name]: textvalue })
    }
    const postdata = async event => {
        event.preventDefault();
        let collectionName = myStoreData.username + "_" + myStoreData.uid;
        const docRef = await addDoc(collection(db, collectionName), data);
        if (docRef) {
            setData({ notes: '' }); setAlertmessageflag(true);
            setTimeout(() => navigate('/view_notes'), 1000);
        }
    }
    return (
        <React.Fragment>
            <SidebarMenu />
            <div className="profile">
                <NavigationHeader backButton="true" />
                <div className="main-wrapper">
                    <div className="page no-navbar no-toolbar no-swipeback login-page login d-flex align-items-center">
                        <div className="page-content w-100">
                            <div className="account-content">
                                {alertmessageflag ? (<AlertMessage
                                    responseStatus={"success"}
                                    message={"Notes created successfully"} />) : ''
                                }
                                <div className="account-title">
                                    <h3>create new notes</h3>
                                </div>
                                <div className="account-form">
                                    <form onSubmit={postdata}>
                                        <div className="input-list">
                                            <textarea name="notes" value={data.notes} className="form-control newlineclass" onChange={handleChnage} rows="3">
                                            </textarea>
                                        </div>
                                        <div className="input-list">
                                            <button type="submit" className="button button-big account-btn btn w-100">Create Notes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateNotes