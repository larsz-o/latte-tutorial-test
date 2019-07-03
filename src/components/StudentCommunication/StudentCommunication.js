import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class StudentCommunication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list each tool we want to display in a table here as objects in an array
            // if you want to add another type of tool, copy this format { title: 'name of feature', text: '<html>your formatted html here</html>', img: 'your_file_name.type'},
            // make sure you place commas between each property in the object (after the closing quotation mark for each property) and between objects in the array (after the last curly brace)
            // all text *must* be formatted as html and begin with back ticks (``) and all images *must* be added to the icon folder in this workspace. ask Lars if you need help with this. 
            tools: [
                {
                    title: 'Post a course announcement', text: `<p class="card-text">Share an update with students in the <a href="https://kb.brandeis.edu/display/LTS/Course+Announcements" target="_blank" rel="noopener noreferrer">Course News &amp; Announcements</a> forum.<br /><br /> <em>Try configuring the different forum settings: change the general forum to a <a href="https://www.lynda.com/Moodle-tutorials/Forum/433722/458301-4.html" target="_blank" rel="noopener noreferrer">Q+A forum</a> or a private forum for individual students to write to you directly.</em></p>
                <a href="https://docs.moodle.org/36/en/Forum_activity" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'forum.svg'
                },
                {
                    title: 'Set up your digital office hours', text: `<p class="card-text">Add a <a href="https://kb.brandeis.edu/display/LTS/Getting+Started+with+Zoom" target="_blank" rel="noopener noreferrer">Zoom</a> link and set up a meeting time for students to join.<br /><br /> <em>For weekly office hours, try putting a link in each course week.</em></p>
                <a href="https://moodle.org/plugins/mod_zoom" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'zoom.ico'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Student Communication</h3>
                    <p className="center">Most of teaching is communicating, but there are a few features that you will use for the sole purpose of making announcements to or meeting with students. Explore how to use these features in LATTE through practice. Take a look at each communication card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card.</em></p><p className="center"><em>Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>

                    <Container>
                        <Row className="flex-container">
                            {/* we map over each item in the array of tools stored in local state and create a new card for each item */}
                            {this.state.tools.map((tool, i) => {
                                return (
                                    <Card key={i} className="card-latte">
                                        <Card.Header>
                                            <Card.Title className="card-title-container">
                                                <h5 className="card-title">{tool.title}</h5><img className="icon-align" src={require('../Icons/' + tool.img)} alt={tool.img} />
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <div dangerouslySetInnerHTML={{ __html: tool.text }} />
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
export default StudentCommunication; 