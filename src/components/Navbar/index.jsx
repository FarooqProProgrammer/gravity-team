import React from 'react'
import { Link } from 'react-router-dom'
import LogoLight from "../../assets/images/logo-light.png.png"
import { MenuData } from '../../utils/data'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand text-white" to="#!">
                    <img src={LogoLight} alt="" srcset="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-3">
                        {
                            MenuData?.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link text-white font-primary" to={item?.url}>
                                            {item?.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <Link to={'#!'} className='nav-link text-white font-secondary'>
                        GET IN TOUCH
                    </Link>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
