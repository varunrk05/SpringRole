import React, { Component } from 'react';
import sr_logo_updated from './images/sr_logo_updated.png';
import './index.css';

class Navbar extends Component{
    render(){
        return(
            <div className = 'navbar-main'>
                <div className = 'navbar-inner'>
                    <div className = "navbar-logo">
                        <a href="https://springrole.com/">
                            <img className = "img-responsive" src={sr_logo_updated} alt="SpringRole" />
                        </a>
                    </div>
                    <div className = "navbar-buttons">
                        <ul>
                            <li><a href = "#">Sign Up</a></li>
                            <li><a href = "#">Login</a></li> 
                        </ul>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Navbar;