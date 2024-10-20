import { Link } from "react-router-dom"
import user from '../assets/img/team-2.jpg'

const Header = () => {
    return (
        <>
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </section>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between">
                    <div id="logo">
                        <h1><a href="index.html">Co<span>co</span><span className="y">y</span> <span className="numb">724</span> </a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt=""></a>*/}

                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to={'/inicio'} className="nav-link scrollto active">Inicio</Link></li>
                            <li><Link to={'/tienda'} className="nav-link scrollto">Tienda</Link></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li className="dropdown"><a href="#"><span>Listas</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="user-profile d-flex align-items-center px-4">
                            <img src={user} alt="User Profile" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                            
                        </div>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>
        </>
    )
}

export default Header
