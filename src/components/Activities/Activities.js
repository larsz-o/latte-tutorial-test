import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class Activities extends Component {
    constructor(props){
        super(props);
        this.state = {
            // list each tool we want to display in a table here as objects in an array
            // if you want to add another type of tool, copy this format { title: 'name of feature', text: '<html>your formatted html here</html>', img: 'your_file_name.type'},
            // make sure you place commas between each property in the object (after the closing quotation mark for each property) and between objects in the array (after the last curly brace)
            // all text *must* be formatted as html and begin with back ticks (``) and all images *must* be added to the icon folder in this workspace. ask Lars if you need help with this. 
            tools: [
                {title: 'Add a file submission assignment', text: `<p class="card-text">This will allow students to <a href="https://www.lynda.com/Moodle-tutorials/Assignment/511293/583709-4.html" target="_blank" rel="noopener noreferrer">upload a variety of document formats</a> for your review.<br /><br /> <em>Try adjusting 2-3 of the settings. Instructors have control over assignment visibility, due date, feedback format, and much more.</em></p>
                <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'assignment.svg'},
                {title: 'Create a LATTE native assignment', text: `<p class="card-text">Take a <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">closer look</a> at the "Submission Types" option to change "file submissions" to "online text."<br /><br /> <em>Which features change between the two formats?</em></p>
                <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'assignment.svg'},
                {title: 'Add a quiz', text: `<p class="card-text">Make <a href="https://kb.brandeis.edu/display/LTS/Quiz+Your+Students+Using+LATTE" target="_blank" rel="noopener noreferrer">a quiz</a> to assess student comprehension. Include at least one of each type of question: multiple choice, true/false, short answer, and essay.<br /><br /> <em> Try setting the open and close dates for the <a href="https://www.lynda.com/Moodle-tutorials/Quiz/511293/583710-4.html" target="_blank" rel="noopener noreferrer">quiz</a> and limiting the number of attempts allowed.</em></p>
                <a href="https://docs.moodle.org/36/en/Quiz_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'quiz.svg'},
                {title: 'Create a new discussion forum thread', text: `<p class="card-text">Start a new discussion topic in the forum provided (or create a new forum!). Then, post to the discussion forum and then post some feedback on that post.<br /><br /> <em> How would you record a grade for each student on a forum post?</em></p>
                <a href="https://docs.moodle.org/36/en/Forum_activity" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'forum.svg'},
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Assignments &amp; Assessments</h3>
                    <p className="center">Explore how to <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">create</a> and grade assignments and adjust their settings in LATTE through practice. Take a look at each assignment card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card for help.<br /></em><em ><br />Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>

                    <Container>
                        <Row noGutters className="flex-container">
                            {/* we map over each item in the array of tools stored in local state and create a new card for each item */}
                            {this.state.tools.map((tool, i) => {
                                return(
                                    <Card key={i} className="card-latte">
                                        <Card.Header>
                                            <Card.Title className="card-title-container">
                                                <h5 className="card-title">{tool.title}</h5>
                                                  {/* give a background color to the gradebook icon, and only that icon */}
                                                {tool.img !== 'baseline-grid_on-24px.svg' && <img className="icon-align" src={require('../Icons/' + tool.img)} alt={tool.img}/>}
                                                {tool.img === 'baseline-grid_on-24px.svg' && <img src={require( '../Icons/' + tool.img)} alt="gradebook" className="icon-align grade-img"/>}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <div dangerouslySetInnerHTML={{__html: tool.text}}/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
export default Activities; 