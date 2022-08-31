import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../component/SidebarMenu'
import NavigationHeader from '../component/NavigationHeader'
const Homepage = () => {
    return (
        <React.Fragment>
            <SidebarMenu />
            <div className="home">
                <NavigationHeader />
                <div className="page-content">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-12">
                                <Link to={'/create_note'} className="btn btn-primary btn-block btn-lg w-100">
                                    Create Notes
                                </Link>
                            </div>
                            <div className="col-12 mt-3">
                                <Link to={'/view_notes'} className="btn btn-primary btn-block btn-lg w-100">
                                    View Notes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage;