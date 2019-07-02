import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class Resources extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Course Resources</h3>
                    <p className="center">Explore how to add course resources and adjust their settings in LATTE through practice. Take a look at each resource card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card for help.</em></p><p className="center"><em>Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>


                    <Container>
                        <Row noGutters className="flex-container">
                            <Card border="primary" className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Add a file<span className="breathing-room"><img src={require('../Icons/file.svg')} alt="file icon" role="presentation" /></span></h5></Card.Title></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p className="card-text">Upload any File to your Sandbox course. <br /><br /><em>Try adding a few different file formats and adjusting the settings to hide and show the resource to students.</em></p>
                                        <a href="https://docs.moodle.org/36/en/File_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer" >Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="primary" className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Create a label<span className="breathing-room"><img src={require('../Icons/label.svg')} alt="label icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p className="card-text">Add an additional Label to the bottom of Topic of your Sandbox course.<br /><br /><em>Try embedding a video or image into the label and adding alt text.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Label" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="primary" className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Create a link<span className="breathing-room"><img src={require('../Icons/url.svg')} alt="url icon" role="presentation" /></span></h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p className="card-text">Add a URL resource to your Sandbox course.<br /><br /><em>Try adjusting the settings to change how the URL opens for the user.</em></p>
                                        <a href="https://docs.moodle.org/36/en/URL_resource"  className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="primary" className="card-latte">
                                <Card.Header>
                                    <Card.Title className="card-title-container"><h5 className="card-title">Add a page<span className="breathing-room"><img src={require('../Icons/page.svg')} alt="page icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <p className="card-text">Create a new Page resource. Add some text and images or videos.<br /><br /><em> Try to use the Screenreader Help feature to learn how your page will display to people who use assistive technology.</em></p>
                                    <a href="https://docs.moodle.org/36/en/Page_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                </Card.Text>
                            </Card.Body>
                                </Card>
                                
                        
                            <Card border="primary" className="card-latte">
                                <Card.Header>
                                <Card.Title className="card-title-container"><h5 className="card-title">Create a folder<span className="breathing-room"><img src={require('../Icons/folder.svg')} alt="folder icon" role="presentation" /></span></h5></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    <p className="card-text">Add a Folder to help organize your resources.<br /><br /><em> Try adjusting how the folder's contents are displayed.</em></p>
                                    <a href="https://docs.moodle.org/36/en/Folder_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                   
                        <Card border="primary" className="card-latte">
                            <Card.Header>
                            <Card.Title className="card-title-container"><h5 className="card-title">Form a group<span className="breathing-room"><img className="grade-img" src={require('../Icons/baseline-grid_on-24px.svg')} alt="group icon" role="presentation" /></span></h5></Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    <p className="card-text">Watch <a href="http://www.lynda.com/Moodle-tutorials/Creating-groups-collaborative-work/370012/406867-4.html?org=brandeis.edu" target="_blank" rel="noopener noreferrer">this video</a> to learn about how to add students to <a href="https://kb.brandeis.edu/display/LTS/Create+and+Use+Groups+in+a+Course" target="_blank" rel="noopener noreferrer">groups</a>. Then, create a group, give it a name, and add yourself to it.<br /><br /><em>Since you are the only enrolled user in this course, you'll have to wait to sort students into groups until you get your course LATTE page.</em></p>
                                    <a href="https://docs.moodle.org/36/en/Groups" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Row>
                    </Container>
                </div >
            </div >
        );
    }
}
export default Resources; 