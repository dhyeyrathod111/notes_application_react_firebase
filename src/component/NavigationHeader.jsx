import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutdoEmptyStore } from '../actions/index'
const NavigationHeader = props => {
    const navigate = useNavigate();
    const dispactch = useDispatch();
    const logoutMethod = event => {
        event.preventDefault(); localStorage.removeItem('userid');
        dispactch(userLogoutdoEmptyStore()); navigate('/')
    }
    if (props.backButton) {
        return (
            <div className="navbar two-action no-hairline">
                <div className="navbar-inner d-flex align-items-center justify-content-between">
                    <div className="left me-0">
                        <Link to={'/homepage'} className="back link d-flex align-items-center">
                            <i className="fa fa-angle-left" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <div className="sliding custom-title">Profile</div>
                    <div className="right d-flex">
                        <a className="link icon-only"><i className="material-icons">notifications</i></a>
                        <a href="#" data-bs-toggle="dropdown" aria-expanded="true" className="link dropdown-link"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                            <a className="dropdown-item">My Profile</a>
                            <a className="dropdown-item">Settings</a>
                            <a onClick={logoutMethod} className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar two-action no-hairline">
                <div className="navbar-inner d-flex align-items-center justify-content-between">
                    <div className="left sidebar-open">
                        <a href="#" className="link icon-only"><i className="material-icons">menu</i></a>
                    </div>
                    <div className="sliding">
                        {/* <img src="assets/img/logo.png" /> */}
                        <h3 className="text-white">Dhyey Rathod</h3>
                    </div>
                    <div className="right d-flex">
                        {/* <a className="link icon-only"><i className="material-icons">notifications</i></a> */}
                        <a href="#" data-bs-toggle="dropdown" aria-expanded="true" className="link dropdown-link"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                            <a className="dropdown-item">My Profile</a>
                            <a className="dropdown-item">Settings</a>
                            <a onClick={logoutMethod} className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default NavigationHeader