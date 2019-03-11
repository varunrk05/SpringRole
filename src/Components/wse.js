import React, { Component } from 'react';

class WorkSkEd extends Component{
    constructor(){
        super();
        
        this.state = {  
            isLoaded: false,          
            workex: [],
            skill: [],
            edu: []
        };
    }

    // componentDidMount() {
    //     const urlWE = "https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience";
    //     const urlSK = "https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills";
    //     const urlED = "https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education";

    //     fetch(urlWE)
    //         .then(result => result.json())
    //         .then(result => {
    //             this.setState({
    //                 isLoaded: true,
    //                 workex: result.work_experiences
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    //     fetch(urlSK)
    //         .then(result => result.json())
    //         .then(result => {
    //             this.setState   ({
    //                 isLoaded: true,
    //                 skill: result.skills
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });

    //     fetch(urlED)
    //         .then(result => result.json())
    //         .then(result => {
    //             this.setState({
    //                 isLoaded: true,
    //                 edu: result.educationList
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // render() {

    //     if(!this.state.isLoaded){
    //         return <div>Loading...</div>
    //     }
    //     else{
    //         return(
    //             <div className = "display">
    //                 {this.state.edu.map(entry => (
    //                     <div className = "display">
    //                         {entry.id}
    //                     </div>
    //                 ))}
    //             </div>
    //         );
    //     }
    // }

    render() {
        return (
            <div className = "">

            </div> 
        );
    }
}

export default WorkSkEd;