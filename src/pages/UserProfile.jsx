import React from 'react';
import SidebarMenu from '../component/SidebarMenu'
import NavigationHeader from '../component/NavigationHeader'
import { useSelector } from 'react-redux';
const UserProfile = () => {
    const MyReduxState = useSelector(state => state.fetchUserReducer);
    console.log(MyReduxState);
    return (
        <React.Fragment>
            <SidebarMenu />
            <div className="profile">
                <NavigationHeader backButton="true" />
                <div className="page-content mt-0">
                    <div className="profile-header">
                        <div className="pro-img-box">
                            <img alt="" src="assets/img/user.jpg" />
                            <div className="pro-img-upload">
                                <input type="file" className="upload" />
                            </div>
                        </div>
                        <div className="pro-user-det">
                            <div className="profile-name">{MyReduxState.username}</div>
                        </div>
                    </div>
                    {/* <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a id="Overview" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">Overview</a>
                        </li>
                    </ul> */}
                    <div id="content" className="tab-content" role="tablist">
                        <div id="pane-A" className="tab-pane fade show active" role="tabpanel" aria-labelledby="Overview">
                            <div id="collapse-A" className="collapse show" data-parent="#content" role="tabpanel" aria-labelledby="heading-A">
                                <div className="list">
                                    <div className="card-box">
                                        <ul>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Username</div>
                                                        <div className="item-after text-muted">{MyReduxState.username}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Phone</div>
                                                        <div className="item-after text-muted">{MyReduxState.contact}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Email</div>
                                                        <div className="item-after text-muted">{MyReduxState.email}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">ID</div>
                                                        <div className="item-after text-muted">{MyReduxState.uid}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="card-box pt-0 pb-0">
                                        <div className="block block-strong address-block">
                                            <p className="mb-0"><strong>Address</strong></p>
                                            <p>1861 Bayonne Ave, Manchester Township, NJ, 08759</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <div className="block skills-block">
                                            <p><strong>Skills</strong></p>
                                            <div className="skills">
                                                <span>IOS</span>
                                                <span>Android</span>
                                                <span>Html</span>
                                                <span>CSS</span>
                                                <span>Codignitor</span>
                                                <span>Php</span>
                                                <span>Javascript</span>
                                                <span>Wordpress</span>
                                                <span>Jquery</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile;