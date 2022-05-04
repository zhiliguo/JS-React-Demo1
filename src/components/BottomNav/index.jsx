import React from "react"
import "./style.less"
import { NavLink } from "react-router-dom" //button highlight module

const BottomNav = () =>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink exact to="/">
                        <i className="iconfont icon-home"></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/life">
                        <i className="iconfont icon-trophy"></i>
                        Life and Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop">
                    <i className="iconfont icon-shop"></i>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <i className="iconfont icon-team"></i>
                        My Page
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BottomNav