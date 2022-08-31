import React, { useState, useEffect } from 'react';
import SidebarMenu from '../component/SidebarMenu'
import NavigationHeader from '../component/NavigationHeader'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
const EditNotes = props => {
    const [persnalnotes, setPersnalnotes] = useState({
        notes: "",
    });
    const datarequest = useParams();
    const myStoreData = useSelector(state => state.fetchUserReducer);

    const handleChnage = event => {
        event.preventDefault();
        let name = event.target.name;
        let textvalue = event.target.value;
        setPersnalnotes({ ...persnalnotes, [name]: textvalue })
    }
    useEffect(() => {
        myStoreData.persnalNotes.usernotes.map(allnotes => {
            if (datarequest.noteid == allnotes.noteid) {
                setPersnalnotes({
                    notes: allnotes.usernotes
                });
            }
        })
    }, []);

    return (
        <React.Fragment>
            <SidebarMenu />
            <div className="profile">
                <NavigationHeader backButton="true" />
                <div className="main-wrapper">
                    <div className="page no-navbar no-toolbar no-swipeback login-page login d-flex align-items-center">
                        <div className="page-content w-100">
                            <div className="account-content">
                                <div className="account-title">
                                    <h3>Edit Your Notes</h3>
                                </div>
                                <div className="account-form">
                                    <form>
                                        <div className="input-list">
                                            <textarea name="notes" onChange={handleChnage} value={persnalnotes.notes} className="form-control" rows="5">
                                            </textarea>
                                        </div>
                                        <div className="input-list">
                                            {/* <button type="submit" className="button button-big account-btn btn w-100">Submit Update</button> */}
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

export default EditNotes