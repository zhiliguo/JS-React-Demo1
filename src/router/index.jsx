import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom" //v6 switch change to Routes
import Home from "../pages/Home"
import LifeService from "../pages/LifeService"
import Shop from "../pages/Shop"
import User from "../pages/User"

import BottomNav from "../components/BottomNav"

/**
 * v6
 * element={ <Home />} />  
 * component to element 
 * {id}need to add <>
 */
const AppRouter = () =>{
    return(
        <Router>
            <BottomNav />
            <Routes>
                <Route exact path="/" element={ <Home />} />   
                <Route path="/life" element={ <LifeService /> } />
                <Route path="/shop" element={ <Shop /> } />
                <Route path="/user" element={ <User /> } />
            </Routes>
        </Router>
    )
}

export default AppRouter