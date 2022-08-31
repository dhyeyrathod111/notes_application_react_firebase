import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch } from 'react-redux'
import { fetchUsersAllNotesFromFirestore } from '../actions/index'
const OneNoteComp = props => {
    const dispactch = useDispatch(); const navigate = useNavigate();
    const deleteNotes = async notesID => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            let collectionName = props.username + "_" + props.uid
            await deleteDoc(doc(db, collectionName, notesID));
        }
        dispactch(
            fetchUsersAllNotesFromFirestore(props.username, props.uid)
        )
    }
    const editNotes = noteId => {
        navigate('/edit_notes/' + noteId)
    }
    return (
        <div className="list no-hairlines leave-list">
            <div className="container">
                <ul className="row">
                    <li className="col-12">
                        <div className="item-content">
                            <div className="item-inner align-items-center justify-content-between pt-2 pb-2">
                                <div className="item-title" style={{ margin: "10px" }}>
                                    <span className="list-title mb-0">
                                        <p>{props.notesobject.usernotes}</p>
                                    </span>
                                    <div className="item-footer">
                                        <CopyToClipboard text={props.notesobject.usernotes}>
                                            <span className="badge badge-warning m-1">
                                                Copy to clipboard
                                            </span>
                                        </CopyToClipboard>
                                        <span onClick={() => editNotes(props.notesobject.noteid)} className="badge badge-primary m-1">
                                            Edit
                                        </span>
                                        <span onClick={() => deleteNotes(props.notesobject.noteid)} className="badge badge-danger m-1">
                                            Delete
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default OneNoteComp