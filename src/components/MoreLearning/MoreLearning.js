import React, { Component } from 'react';

class MoreLearning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list each resource we want to display in a table here as objects in an array
            // if you want to add another type of resource, copy this format {icon: 'filename.type', title: 'name of feature', url: 'link_to_documentation.com'},
            // make sure you place commas between each property in the object (after the closing quotation mark for each property) and between objects in the array (after the last curly brace)
            resources: [
            { icon: 'chat.svg', title: 'Chat', url: 'https://docs.moodle.org/36/en/Chat_activity' },
            { icon: 'choice.svg', title: 'Choice', url: 'https://docs.moodle.org/36/en/Choice_activity' },
            { icon: 'database.svg', title: 'Database', url: 'https://docs.moodle.org/36/en/Database_activity' },
            { icon: 'feedback.svg', title: 'Feedback', url: 'https://docs.moodle.org/36/en/Feedback_activity' },
            { icon: 'glossary.svg', title: 'Glossary', url: 'https://docs.moodle.org/36/en/Glossary_activity' },
            { icon: 'h5p.svg', title: 'H5P', url: 'https://kb.brandeis.edu/pages/viewpage.action?pageId=28279505' },
            { icon: 'hot_question.svg', title: 'Hot Question', url: 'https://moodle.org/plugins/mod_hotquestion' },
            { icon: 'lesson.svg', title: 'Lesson', url: 'https://docs.moodle.org/36/en/Lesson_activity' },
            { icon: 'external_tool.svg', title: 'VoiceThread', url: 'https://docs.moodle.org/36/en/Wiki_activity' },
            { icon: 'workshop.svg', title: 'Workshop', url: 'https://docs.moodle.org/36/en/Workshop_activity' },
            ]
        }
    }
    render() {
        return (
            <div className="main">
                    <h3>More Resources</h3>
                    <p className="center">Just can't get enough? Try working your way through all of the available <a href="https://docs.moodle.org/36/en/Activities" target="_blank" rel="noopener noreferrer">activities.</a> There is so much to explore in LATTE - the sky is the limit for how you can use different tools to enhance your teaching and promote student engagement.&nbsp;</p><p className="center"><br /> Try implementing some of these other features in the Practice Here or Your Experimental Space sections below.</p>
             
                <table>
                    <thead>
                        <tr>
                            <td>Feature</td>
                            <td>Documentation</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* create a table row for each resource we have in the array in local state */}
                       {this.state.resources.map((feature, i)=> {
                           return (  <tr key={i}>
                            <td><p><img src={require('../Icons/' + feature.icon)} alt={feature.title} height="24px"/><span className="breathing-room"></span>{feature.title}</p></td>
                            <td><a href={feature.url} target="_blank" rel="noopener noreferrer">{feature.url}</a></td>
                        </tr>)
                         
                       })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default MoreLearning;