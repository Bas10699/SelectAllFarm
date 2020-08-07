import React from 'react'
import { NavLink ,useHistory } from 'react-router-dom';
const Navber = () => {
    let history = useHistory();
    return (
        <nav className="navbar navbar-expand-sm bg-success navbar-dark sticky-top">
            <NavLink to="/" className="navbar-brand" >หน้าแรก</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        {/* <NavLink to="/">ดูข้อมูล</NavLink> */}
                        <a className="nav-link" href="#">ดูข้อมูล</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/AddData"className="nav-link" >เพิ่มข้อมูล</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">เกี่ยวกับเรา</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navber