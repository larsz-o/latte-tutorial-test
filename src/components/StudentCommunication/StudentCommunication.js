import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class StudentCommunication extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Student Communication</h3>
                    <p className="center">Most of teaching is communicating, but there are a few features that you will use for the sole purpose of making announcements to or meeting with students. Explore how to use these features in LATTE through practice. Take a look at each communication card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card.</em></p><p className="center"><em>Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>

                    <Container>
                        <Row className="flex-container">
                                <Card className="card-latte">
                                    <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Post a course announcement<span className="breathing-room"><img src={require('../Icons/forum.svg')} alt="forum icon" role="presentation" /></span></h5></Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                    <Card.Text>
                                        <p class="card-text">Share an update with students in the <a href="https://kb.brandeis.edu/display/LTS/Course+Announcements" target="_blank" rel="noopener noreferrer">Course News &amp; Announcements</a> forum.<br /><br /> <em>Try configuring the different forum settings: change the general forum to a <a href="https://www.lynda.com/Moodle-tutorials/Forum/433722/458301-4.html" target="_blank" rel="noopener noreferrer">Q+A forum</a> or a private forum for individual students to write to you directly.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Forum_activity" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="card-latte">
                                    <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Set up your digital office hours<span className="breathing-room"><img src={require('../Icons/zoom.ico')} alt="zoom icon" role="presentation" /></span></h5></Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                        <p class="card-text">Add a <a href="https://kb.brandeis.edu/display/LTS/Getting+Started+with+Zoom" target="_blank" rel="noopener noreferrer">Zoom</a> link and set up a meeting time for students to join.<br /><br /> <em>For weekly office hours, try putting a link in each course week.</em></p>
                                        <a href="https://moodle.org/plugins/mod_zoom" target="_blank" rel="noopener noreferrer">Need a hint?</a>
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
export default StudentCommunication; 