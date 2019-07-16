import React, { Component } from 'react';

class Tasks extends Component {
    constructor(props){
        super(props);
        // we are storing our data in local state. if you want to add or edit these tasks, follow the format below. 
        // each task is a string that tells the user what to do. each tasks must have a type so that it is grouped with the other tasks on its page. 
        this.state = {
            tasks: [
                {type: 'resource', task: 'Add a file'}, 
                {type: 'resource', task: 'Create a label'},
                {type: 'resource', task: 'Create a link'},
                {type: 'resource', task: 'Add a page'}, 
                {type: 'resource', task: 'Create a folder'}, 
                {type: 'resource', task: 'Navigate to the "Participants" page to form a new group'}, 
                {type: 'assignment', task: 'Add a file submission assignment'}, 
                {type: 'assignment', task: 'Create a LATTE native assignment'}, 
                {type: 'assignment', task: 'Add a quiz'},
                {type: 'assignment', task: 'Create a new discussion forum thread'},
                {type: 'grading', task: 'Set up your Gradebook'},
                {type: 'grading', task: 'Make an offline assignment'},
                {type: 'grading', task: 'Grade an assignment'},
                {type: 'grading', task: `View a student's grades`},
                {type: 'grading', task: 'Export grades'},
                {type: 'communication', task: 'Post a course announcement'},
                {type: 'communication', task: 'Set up your digital office hours'}
            ]
        }
    }

    render(){
        let currentTask = this.props.match.params.type;
        return(
            <div>
                <h3>Practice</h3>
                <p>Complete the following tasks in the space provided below or in the appropriate location within LATTE.</p>
                <p>You can mark each task as complete by clicking the check box next to the labels that read "Task #, Task #," etc.</p>
                <p><i> (Hint: Try clicking on "Add an activity or resource")</i></p>
                <div className="spacer"></div>
                <ul className="no-decorations">
                    {this.state.tasks.map((todo, i) => {
                        return(
                           <div key={i}>
                               {/* we're using the route parameters to determine which tasks appear in our unordered list. if the parameter matches the 
                               'type' of the object, we'll display it.  */}
                               {currentTask === todo.type && <li className="bigger">Task {i+1}: &nbsp; {todo.task}</li>}
                           </div>
                        );
                    })}
                </ul>
            
            </div>
        );
    }
}
export default Tasks; 