import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import TaskCard from '../TaskCard/TaskCard';

class Grading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [
                { title: 'Set up your Gradebook', text: '<p className="card-text">Watch this <a href="https://www.lynda.com/Moodle-tutorials/Gradebook-setup/511293/583719-4.html?autoplay=true" target="_blank" rel="noopener noreferrer">video about how to set up your Gradebook</a>, then try to set up your own. Add in a few category folders, move the assignments you have already created into a folder, and assign weighted values to each category.<br/><br/><em>Make sure that all of your categories total up to 100%.</em></p><a href="https://docs.moodle.org/37/en/Grade_categories" target="_blank" rel="noopener noreferrer">Need a hint?</a>', img: 'baseline-grid_on-24px.svg' },
                {
                    title: 'Make an offline assignment', text: `<p className="card-text">Create a new assignment in your <a href="https://kb.brandeis.edu/display/LTS/Using+the+Gradebook" target="_blank" rel="noopener noreferrer">Gradebook </a>and assign it to a category that you created.<br /><br /> <em>Try changing the grading scale.</em></p>
                <a href="https://docs.moodle.org/36/en/Grader_report" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'assignment.svg'
                },
                {
                    title: 'Grade an assignment', text: `<p className="card-text">Give a numerical grade and some comments on an assignment.<br /><br /> <em> Hint: You can grade the "offline" assignment you just created.</em></p>
                <a href="https://docs.moodle.org/36/en/Grading_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'baseline-grid_on-24px.svg'
                },
                { title: `View a student's grades`, text: `<p className="card-text">Look up grades for a specific student. Find the "User Report" and view the grades for one student or all students. <br/><br/> Note: You should see 'Stanley Student' in the drop-down menu for "Select all or one user." Choose Stanley to see what it will look like to view one students' grades. </p><a href="https://docs.moodle.org/37/en/Grader_report" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'group_choice.svg' },
                { title: 'Export grades', text: '<p className="card-text">Download student grades in your preferred file format.<br/><br/><em>Try adding data to the exported file. Then, save that file and import it to your gradebook.</em></p><a href="https://docs.moodle.org/37/en/Grade_export" target="_blank" rel="noopener noreferrer">Need a hint?</a>', img: 'download.png' },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Grading</h3>
                    <p className="center">Explore how to use the Gradebook in LATTE through practice. Take a look at each task card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card for help.</em></p><p className="center"><em>Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>
                    <Container>
                        <Row noGutters className="flex-container">
                            {/* we map over each item in the array of tools stored in local state and create a new card for each item */}
                            {this.state.resources.map((resource, i) => {
                                return (
                                    <TaskCard key={i} data={resource} />
                                );
                            })}
                        </Row>
                    </Container>
                </div >
            </div >
        );
    }
}
export default Grading; 