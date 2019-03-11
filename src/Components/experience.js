import React, { Component } from 'react';

class ExpEndorse extends Component{
    render(){
        return(
            <div className = "exp-endorse-bar">
                <div className = "exp-endorse-content">
                    <div className = "btn-panel">
                        <div className = "endorse-btn app-btn">
                            <div>Endorse +</div>
                        </div>
                        <div className = "verify-exp-btn app-btn">
                            <div>Verify Experience</div>
                        </div>
                    </div>
                    <div className = "exp">
                        <div className = "exp-det">
                            <div className = "exp-text">
                                10+
                                <span>yrs</span>
                            </div>
                            <div className = "exp-bar exp-bar-1"></div>
                            <div className = "exp-bar exp-bar-2"></div>
                            <div className = "exp-bar exp-bar-3"></div>
                            <div className = "exp-txt">Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpEndorse;