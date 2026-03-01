import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=' p-4 d-flex justify-content-between align-items-center bg-white position-fixed w-100 top-0 shadow'>
            <div className=" fs-5">
                Sanlat X-RPL
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Pages</span>
                    <i className="bi bi-list mx-2"></i>
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/quran/read">Quran</Link></li>
                    <li><Link className="dropdown-item" to="/shalat">Shalat</Link></li>
                    <li><Link className="dropdown-item" to="/countdown">Countdown</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar