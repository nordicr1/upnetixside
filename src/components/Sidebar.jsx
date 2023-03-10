import React, { useState } from "react";
import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaThList, FaUserAlt,
} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import Logo from '../assets/upnetix5.svg'

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen)
    const menuItem = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh/>
        },
        {
            path: '/sobre',
            name: 'Sobre',
            icon: <FaUserAlt/>
        },
        {
            path: '/tutoriais',
            name: 'Tutoriais',
            icon: <FaRegChartBar/>
        },
        {
            path: '/chat',
            name: 'Chat',
            icon: <FaCommentAlt/>
        },
        {
            path: '/planos',
            name: 'Planos',
            icon: <FaShoppingBag/>
        },
        {
            path: '/links',
            name: 'Links',
            icon: <FaThList/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? '300px' : '70px'}} className="sidebar">
                <div className="top_section">
                    <img style={{display: isOpen ? 'block' : 'none'}} src={Logo} alt="upnetix" className="logo" />
                    <div style={{marginLeft: isOpen ? '50px' : '0px'}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? 'block' : 'none'}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar