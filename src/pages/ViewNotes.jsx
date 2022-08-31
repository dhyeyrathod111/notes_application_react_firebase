import React, { useEffect } from 'react'
import Loader from '../component/Loader'
import NavigationHeader from '../component/NavigationHeader'
import SidebarMenu from '../component/SidebarMenu'
import OneNoteComp from '../component/OneNoteComp'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsersAllNotesFromFirestore } from '../actions/index'
const ViewNotes = () => {
    const dispactch = useDispatch();
    
    const myStoreData = useSelector(state => state.fetchUserReducer);
    useEffect(() => {
        dispactch(
            fetchUsersAllNotesFromFirestore(myStoreData.username, myStoreData.uid)
        )
    }, []);
    if (!myStoreData.persnalNotes.usernotes) {
        return <Loader />
    } else {
        return (
            <React.Fragment>
                <SidebarMenu />
                <NavigationHeader backButton="true" />
                <div className="page-content">
                    {myStoreData.persnalNotes.usernotes.map((oneNotes, index) => {
                        return (
                            <OneNoteComp
                                key={index}
                                notesobject={oneNotes}
                                username={myStoreData.username}
                                uid={myStoreData.uid}
                            />
                        )
                    })}
                </div>
            </React.Fragment >
        )
    }
}

export default ViewNotes