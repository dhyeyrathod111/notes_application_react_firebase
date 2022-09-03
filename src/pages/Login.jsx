import React, { useState } from 'react';
import { auth } from '../firebase-config';
import Loader from '../component/Loader';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { fetchUserActionCreater } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
function Login() {
    const navigate = useNavigate(); const dispactch = useDispatch();
    const [member, setMember] = useState({
        email: "",
        password: ""
    });

    const myStoreData = useSelector(state => state.fetchUserReducer);
    if (myStoreData.uid !== '') {
        navigate('/homepage')
    }

    const handleChnage = event => {
        let name = event.target.name;
        let value = event.target.value;
        setMember({ ...member, [name]: value })
    }
    const postdata = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, member.email, member.password)
            .then(async loginResponse => {
                await localStorage.setItem('userid', loginResponse.user.uid);
                await dispactch(fetchUserActionCreater(loginResponse.user.uid))
            }).catch(error => {
                alert(error.message)
            });
    }
    if (myStoreData.showloader) {
        return (
            <Loader />
        )
    } else {
        return (
            <div className="main-wrapper">
                <div className="page no-navbar no-toolbar no-swipeback login-page login d-flex align-items-center vh100">
                    <div className="page-content w-100">
                        <div className="account-content">
                            <div className="account-title">
                                <h3>Login</h3>
                            </div>
                            <div className="account-form">
                                <form onSubmit={postdata}>
                                    <div className="input-list">
                                        <input required type="text" name="email" value={member.email} onChange={handleChnage} placeholder="Email" />
                                    </div>
                                    <div className="input-list">
                                        <input required type="password" name="password" value={member.password} onChange={handleChnage} placeholder="Password" />
                                    </div>
                                    <div className="input-list">
                                        <button type="submit" className="button button-big account-btn btn w-100">Login</button>
                                    </div>
                                </form>
                                <p className="text-center m-b-0">Create New Account? <Link to={'/registration'}>Registration</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login