import Aos from 'aos'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
interface TopLevel {
    user: User;
}
interface User {
    name: string;
    email: string;
}
const Navbar = () => {
    useEffect(() => {
        Aos.init()
    })
    let isLog: boolean
    localStorage.getItem("userData") ? isLog = true : isLog = false
    const data: TopLevel = JSON.parse(localStorage.getItem("userData")!)
    return (
        <nav className=' p-2 p-lg-4 d-flex justify-content-between align-items-center position-fixed w-100 top-0 shadow' data-aos="fade-down">
            {isLog && (
                <Link className=" fs-5 text-white text-decoration-none" to={'/'}>
                    Selamat datang, {data?.user.name}
                </Link>
            )}
            {!isLog && (
                <Link className=" fs-5 text-white text-decoration-none" to={'/'}>
                    Sanlat X-RPL
                </Link>
            )}
            <div className="btn-group">
                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className=' me-2'>Pages</span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" to="/">
                            <span>Home</span>
                            <i className="bi bi-house-door mx-2"></i> 
                        </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li> {/* Garis pemisah opsional */}
                    <li>
                        <Link className="dropdown-item" to="/quran/read">
                            <span>Quran</span>
                            <i className="bi bi-book mx-2"></i> 
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/shalat">
                            <span>Shalat</span>
                            <i className="bi bi-clock mx-2"></i> 
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/countdown">
                            <span>Countdown</span>
                            <i className="bi bi-hourglass-split mx-2"></i> 
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/quest">
                            <span>Quest</span>
                            <i className="bi bi-trophy mx-2"></i> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar