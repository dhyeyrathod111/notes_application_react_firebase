import React, { useState } from 'react'
import { auth, db } from '../firebase-config';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import AlertMessage from '../component/AlertMessage'

const Registration = () => {
    const navigate = useNavigate();
    const [member, setMember] = useState({
        username: "",
        email: "",
        passwrod: "",
        contact: "",
    });
    const [loaderprocess, setLoaderprocess] = useState({
        buttonName: "Register",
        alert: false,
        responseStatus: "",
        message: ""
    })
    const handleChnage = event => {
        let name = event.target.name;
        let value = event.target.value;
        setMember({ ...member, [name]: value })
    }
    const postdata = async event => {
        event.preventDefault(); setLoaderprocess({ ...loaderprocess, buttonName: "Request In Process..." });
        await createUserWithEmailAndPassword(auth, member.email, member.passwrod)
            .then(userCredential => {
                if (store_userdata_into_firestore(userCredential.user)) {
                    setTimeout(() => navigate('/'), 3000)
                }
                setLoaderprocess({
                    ...loaderprocess,
                    message: "User has been created successfully.",
                    alert: true,
                    responseStatus: "success"
                });
            }).catch(error => {
                setLoaderprocess({
                    ...loaderprocess,
                    message: error.message,
                    alert: true,
                    responseStatus: "danger"
                });
            });
    }
    const store_userdata_into_firestore = async user_auth => {
        await setDoc(doc(db, "usersdata", user_auth.uid), member)
        return true;
    }

    return (
        <div className="main-wrapper">
            <div className="page no-navbar no-toolbar no-swipeback login-page d-flex align-items-center vh100 register">
                <div className="page-content w-100">
                    <div className="account-content">
                        {loaderprocess.alert ? <AlertMessage
                            responseStatus={loaderprocess.responseStatus}
                            message={loaderprocess.message}
                        /> : ''}
                        <div className="account-title">
                            <h3>Register</h3>
                        </div>
                        <div className="account-form">
                            <form onSubmit={postdata}>
                                <div className="input-list">
                                    <input type="text" name="username" value={member.username} onChange={handleChnage} placeholder="Username" />
                                </div>
                                <div className="input-list">
                                    <input type="email" name="email" value={member.email} onChange={handleChnage} placeholder="Email" />
                                </div>
                                <div className="input-list">
                                    <input type="password" name="passwrod" value={member.passwrod} onChange={handleChnage} placeholder="Password" />
                                </div>
                                <div className="input-list">
                                    <input type="text" name="contact" value={member.contact} onChange={handleChnage} placeholder="Contact" />
                                </div>
                                <div className="input-list">
                                    <button type="submit" className="button button-big account-btn btn w-100">{loaderprocess.buttonName}</button>
                                </div>
                            </form>
                            <p className="text-center m-b-0">Already have an account? <Link to={'/'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;