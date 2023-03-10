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
            path: '/about',
            name: 'About',
            icon: <FaUserAlt/>
        },
        {
            path: '/analytics',
            name: 'Analytics',
            icon: <FaRegChartBar/>
        },
        {
            path: '/comment',
            name: 'Comment',
            icon: <FaCommentAlt/>
        },
        {
            path: '/product',
            name: 'Product',
            icon: <FaShoppingBag/>
        },
        {
            path: '/productList',
            name: 'Product List',
            icon: <FaThList/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? '300px' : '70px'}} className="sidebar">
                <div className="top_section">
                    {/* <h1 className="logo">{Logo}</h1> */}
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