import React, { Component } from 'react';

class MoreLearning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [{ icon: '../Icons/chat.svg', title: 'Chat', url: 'https://docs.moodle.org/36/en/Chat_activity' },
            { icon: '../Icons/choice.svg', title: 'Choice', url: 'https://docs.moodle.org/36/en/Choice_activity' },
            { icon: '../Icons/database.svg', title: 'Database', url: 'https://docs.moodle.org/36/en/Database_activity' },
            { icon: '../Icons/feedback.svg', title: 'Feedback', url: 'https://docs.moodle.org/36/en/Feedback_activity' },
            { icon: '../Icons/glossary.svg', title: 'Glossary', url: 'https://docs.moodle.org/36/en/Glossary_activity' },
            { icon: '../Icons/h5p.svg', title: 'H5P', url: 'https://kb.brandeis.edu/pages/viewpage.action?pageId=28279505' },
            { icon: '../Icons/hot_question.svg', title: 'Hot Question', url: 'https://moodle.org/plugins/mod_hotquestion' },
            { icon: '../Icons/lesson.svg', title: 'Lesson', url: 'https://docs.moodle.org/36/en/Lesson_activity' },
            { icon: '../Icons/external_tool.svg', title: 'VoiceThread', url: 'https://docs.moodle.org/36/en/Wiki_activity' },
            { icon: '../Icons/workshop.svg', title: 'Workshop', url: 'https://docs.moodle.org/36/en/Workshop_activity' },
            ]
        }
    }
    render() {
        return (
            <div>
                <chatIcon/>
                <div className="main">
                    <h3>More Resources</h3>
                    <p className="center">Just can't get enough? Try working your way through all of the available <a href="https://docs.moodle.org/36/en/Activities" target="_blank" rel="noopener noreferrer">activities.</a> There is so much to explore in LATTE - the sky is the limit for how you can use different tools to enhance your teaching and promote student engagement.&nbsp;</p><p className="center"><br /> Try implementing some of these other features in the Practice Here or Your Experimental Space sections below:</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Feature</td>
                            <td>Documentation</td>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.resources.map((feature, i)=> {
                           return (  <tr key={i}>
                            <td><span className="breathing-room"><img src={feature.icon} alt={feature.title}/></span><p>{feature.title}</p></td>
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