import React from 'react';
import { Link } from 'react-router-dom';
function SidebarMenu() {
    return (
        <div className="side-menu" id="sidebar-menu">
            <div className="close-btn"><span className="material-icons">close</span></div>
            <div className="side-menu" id="sidebar-menu">
                <ul>
                    <li>
                        <Link className="panel-close" to={"/profile"}>
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link className="panel-close" to={"/create_note"}>
                            Create new notes
                        </Link>
                    </li>
                    <li>
                        <Link className="panel-close" to={"/view_notes"}>
                            View Your Notes
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SidebarMenu