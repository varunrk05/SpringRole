import React, { Component } from 'react';
import write_to_blockchain_img from '../images/write-to-blockchain-img.png';
import profile_img from '../images/profile_img.jpg';
import Message_mobile from '../images/Message_mobile.png';
import Copy_Link from '../images/Copy-Link.png';
import check_green_icon from '../images/check-green-icon.png';

class Profile extends Component{
    render() {
        return(
            <div className = "profile-main">
                <div className = "profile-content">
                    <div className = "profile-photo">
                        <img className = "img-responsive" src = { profile_img } />
                    </div>
                    <div className = "profile-det">
                        <div className = "profile-inner-det">
                            <div className = "profile-inner-content">
                                <div className = "profile-title">
                                    <h1>
                                        Kartik Mandaville
                                        <span title = "Verified Profile"><img className = "img-responsive" src = {check_green_icon} /></span>
                                    </h1>
                                </div>
                                <div className = "profile-desig">
                                    <h4>CEO at SpringRole</h4>
                                    <br />
                                    <p>India</p>
                                </div>
                            </div>
                            <div className = "profile-skill">
                                <div className = "skill-names">
                                </div>
                                <div className = "blockchain-verfied">
                                    <a href = "https://explorer.springrole.com/tx/0x8d753d426573d874046ef00722efb0f7c49a437758d628d0b625dc1ba535f106" target = "_blank">
                                        <img className = "img-responsive" src = {write_to_blockchain_img} />
                                    </a>
                                    <p>Blockchain Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className = "profile-footer">
                            <div className = "url-link">
                               <h4>https://www.springrole.com/kartik</h4>
                            </div>
                            <div className = "copy-link-img">
                                <img className = "img-responsive" src = {Copy_Link} />
                            </div>
                            <span>
                                <img />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;