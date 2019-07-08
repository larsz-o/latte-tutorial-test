import React, { Component } from 'react'; 

class Experiment extends Component {
    render(){
        return (
            <div>
                <h3>Use this space to try out any tools or layouts you'd like!</h3>
               <div class="center">
               <img src={require('../Icons/scientist.png')} alt="scientist"/>
                </div> 
            </div>
        );
    }
}
export default Experiment;