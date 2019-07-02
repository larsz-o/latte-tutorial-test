import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class Activities extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Assignments &amp; Assessments</h3>
                    <p className="center">Explore how to <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">create</a> and grade assignments and adjust their settings in LATTE through practice. Take a look at each assignment card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card for help.<br /></em><em ><br />Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>

                    <Container>
                        <Row noGutters className="flex-container">

                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container">
                                        <h5 className="card-title">Add a file submission assignment<span className="breathing-room"><img src={require('../Icons/assignment.svg')} alt="assignment icon" role="presentation" /></span></h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">This will allow students to <a href="https://www.lynda.com/Moodle-tutorials/Assignment/511293/583709-4.html" target="_blank" rel="noopener noreferrer">upload a variety of document formats</a> for your review.<br /><br /> <em>Try adjusting 2-3 of the settings. Instructors have control over assignment visibility, due date, feedback format, and much more.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Create a LATTE native assignment<span className="breathing-room"><img src={require('../Icons/assignment.svg')} alt="assignment icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Take a <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">closer look</a> at the "Submission Types" option to change "file submissions" to "online text."<br /><br /> <em>Which features change between the two formats?</em></p>
                                        <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Make an offline assignment<span className="breathing-room"><img src={require('../Icons/assignment.svg')} alt="assignment icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Include assignments that are completed entirely offline to your grade book by adjusting the "Setup" in your <a href="https://kb.brandeis.edu/display/LTS/Using+the+Gradebook" target="_blank" rel="noopener noreferrer">Grade book.</a> <br /><br /> <em>Try changing the grading scale.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Grader_report" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Row>
                        <div className="spacer"></div>
                        <Row className="flex-container">

                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Add a quiz<span className="breathing-room"><img src={require('../Icons/quiz.svg')} alt="quiz icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Make <a href="https://kb.brandeis.edu/display/LTS/Quiz+Your+Students+Using+LATTE" target="_blank" rel="noopener noreferrer">a quiz</a> to assess student comprehension. Include at least one of each type of question: multiple choice, true/false, short answer, and essay.<br /><br /> <em> Try setting the open and close dates for the <a href="https://www.lynda.com/Moodle-tutorials/Quiz/511293/583710-4.html" target="_blank" rel="noopener noreferrer">quiz</a> and limiting the number of attempts allowed.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Quiz_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Grade an assignment<span className="breathing-room"><img className="grade-img" src={require('../Icons/baseline-grid_on-24px.svg')} alt="gradebook icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Give a numerical grade and some comments on an assignment.<br /><br /> <em> Hint: You can grade the "offline" assignment you just created.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Grading_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Give feedback on a discussion post<span className="breathing-room"><img src={require('../Icons/forum.svg')} alt="forum icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Post to the discussion forum and then post some feedback on that post.<br /><br /> <em> How would you record a grade for each student on a forum post?</em></p>
                                        <a href="https://docs.moodle.org/36/en/Forum_activity" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
export default Activities; 