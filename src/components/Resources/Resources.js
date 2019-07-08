import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class Resources extends Component {
    constructor(props){
        super(props);
        this.state = {
             // list each tool we want to display in a table here as objects in an array
            // if you want to add another type of tool, copy this format { title: 'name of feature', text: '<html>your formatted html here</html>', img: 'your_file_name.type'},
            // make sure you place commas between each property in the object (after the closing quotation mark for each property) and between objects in the array (after the last curly brace)
            // all text *must* be formatted as html and begin with back ticks (``) and all images *must* be added to the icon folder in this workspace. ask Lars if you need help with this. 
            resources: [
                {title: 'Add a file', text: `<p className="card-text">Upload any File to your Sandbox course. <br /><br /><em>Try adding a few different file formats and adjusting the settings to hide and show the resource to students.</em></p>
                <a href="https://docs.moodle.org/36/en/File_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer" >Need a hint?</a>`, img: 'file.svg'},
                {title: 'Create a label', text: `<p className="card-text">Add an additional Label to the bottom of Topic of your Sandbox course.<br /><br /><em>Try embedding a video or image into the label and adding alt text.</em></p>
                <a href="https://docs.moodle.org/36/en/Label" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'label.svg'},
                {title: 'Create a link', text: ` <p className="card-text">Add a URL resource to your Sandbox course.<br /><br /><em>Try adjusting the settings to change how the URL opens for the user.</em></p>
                <a href="https://docs.moodle.org/36/en/URL_resource"  className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'url.svg'},
                {title: 'Add a page', text: `<p className="card-text">Create a new Page resource. Add some text and images or videos.<br /><br /><em> Try to use the Screenreader Help feature to learn how your page will display to people who use assistive technology.</em></p>
                <a href="https://docs.moodle.org/36/en/Page_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'page.svg'},
                {title: 'Create a folder', text: `<p className="card-text">Add a Folder to help organize your resources.<br /><br /><em> Try adjusting how the folder's contents are displayed.</em></p>
                <a href="https://docs.moodle.org/36/en/Folder_resource" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'folder.svg'},
                {title: 'Form a group', text: `<p className="card-text">Watch <a href="http://www.lynda.com/Moodle-tutorials/Creating-groups-collaborative-work/370012/406867-4.html?org=brandeis.edu" target="_blank" rel="noopener noreferrer">this video</a> to learn about how to add students to <a href="https://kb.brandeis.edu/display/LTS/Create+and+Use+Groups+in+a+Course" target="_blank" rel="noopener noreferrer">groups</a>. Then, create a group, give it a name, and add yourself to it.<br /><br /><em>Since you are the only enrolled user in this course, you'll have to wait to sort students into groups until you get your course LATTE page.</em></p>
                <a href="https://docs.moodle.org/36/en/Groups" className="blockquote-footer" target="_blank" rel="noopener noreferrer">Need a hint?</a>`, img: 'group_choice.svg'}
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <h3>Course Resources</h3>
                    <p className="center">Explore how to add course resources and adjust their settings in LATTE through practice. Take a look at each resource card and try to implement its task in the Practice Here section below.</p>
                    <p className="center"><em>Stuck? Click on the "Need a hint?" link located on each card for help.</em></p><p className="center"><em>Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p>
                    <Container>
                        <Row noGutters className="flex-container">
                               {/* we map over each item in the array of tools stored in local state and create a new card for each item */}
                            {this.state.resources.map((resource, i)=> {
                                return(
                                    <Card key={i} className="card-latte">
                                        <Card.Header>
                                            <Card.Title className="card-title-container">
                                                <h5 className="card-title">{resource.title}</h5>
                                                {/* give a background color to the gradebook icon, and only that icon*/}
                                                {resource.img ==='baseline-grid_on-24px.svg' && <img className="icon-align grade-img" src={require('../Icons/' + resource.img)} alt="gradebook" />}
                                                {resource.img !== 'baseline-grid_on-24px.svg' && <img className="icon-align" src={require('../Icons/' + resource.img)} alt={resource.img}/>}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <div dangerouslySetInnerHTML={{__html: resource.text}}/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                    </Row>
                    </Container>
                </div >
            </div >
        );
    }
}
export default Resources; 