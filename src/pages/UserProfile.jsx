import React from 'react';
import SidebarMenu from '../component/SidebarMenu'
import NavigationHeader from '../component/NavigationHeader'
import { useSelector } from 'react-redux';
const UserProfile = () => {
    const MyReduxState = useSelector(state => state.fetchUserReducer);
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
                            <div className="profile-designation">Web Developer</div>
                        </div>
                    </div>
                    <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a id="Overview" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a id="Education" href="#pane-B" className="nav-link" data-bs-toggle="tab" role="tab">Education</a>
                        </li>
                    </ul>
                    <div id="content" className="tab-content" role="tablist">
                        <div id="pane-A" className="tab-pane fade show active" role="tabpanel" aria-labelledby="Overview">
                            <div id="collapse-A" className="collapse show" data-parent="#content" role="tabpanel" aria-labelledby="heading-A">
                                <div className="list">
                                    <div className="card-box">
                                        <ul>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Employee ID</div>
                                                        <div className="item-after text-muted">FT-0001</div>
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
                                                        <div className="item-after text-muted"><a href="https://smarthr-mobile.dreamguystech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9df7f2f5f3f9f2f8ddf8e5fcf0edf1f8b3fef2f0">[email&nbsp;protected]</a></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Birthday</div>
                                                        <div className="item-after text-muted">24th July</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-content">
                                                    <div className="item-inner d-flex justify-content-between">
                                                        <div className="item-title">Gender</div>
                                                        <div className="item-after text-muted">Male</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-box pt-0 pb-0">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pane-B" className="tab-pane fade" role="tabpanel" aria-labelledby="Education">
                            <div id="collapse-B" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-B">
                                <div className="card-box">
                                    <div className="experience-box">
                                        <ul className="experience-list">
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle" />
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <span className="name">International College of Arts and Science (UG)</span>
                                                        <div>Bsc Computer Science</div>
                                                        <span className="time">2000 - 2003</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle" />
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <span className="name">International College of Arts and Science (PG)</span>
                                                        <div>Msc Computer Science</div>
                                                        <span className="time">2000 - 2003</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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