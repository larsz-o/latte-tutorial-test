import React, { Component } from 'react';
import { Card, Row, Container } from 'react-bootstrap';

class Activities extends Component {
    render() {
        return (
            <div>
                <div style="margin-bottom: 5vh;">
                    <h3 style="text-align: center; font-weight: bold; margin-bottom: 5vh; margin-top: 5vh;">Assignments &amp; Assessments</h3>
                    <p style="text-align: center; font-size: 1.1em;">Explore how to <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">create</a> and grade assignments and adjust their settings in LATTE through practice. Take a look at each assignment card and try to implement its task in the <a href="#practice2">Practice Here</a> section below.</p>
                    <p style="text-align: center; "><em>Stuck? Click on the "Need a hint?" link located on each card for help.<br /></em><em style="font-size: 0.9375rem;"><br />Don't forget to turn your <a href="https://docs.moodle.org/36/en/Turn_editing_on" target="_blank" rel="noopener noreferrer">editing on!</a></em></p><p style="text-align: center;"><br /></p>

                    <div class="container" style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly;">
                        <div class="row">
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Add a file submission assignment<span style="padding: .5vw;"><img src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/assignment.svg" alt="assignment icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">This will allow students to <a href="https://www.lynda.com/Moodle-tutorials/Assignment/511293/583709-4.html" target="_blank" rel="noopener noreferrer">upload a variety of document formats</a> for your review.<br /><br /> <em>Try adjusting 2-3 of the settings. Instructors have control over assignment visibility, due date, feedback format, and much more.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Create a LATTE native assignment<span style="padding: .5vw;"><img src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/assignment%20%282%29.svg" alt="assignment icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">Take a <a href="https://kb.brandeis.edu/display/LTS/Create+Online+Assignments" target="_blank" rel="noopener noreferrer">closer look</a> at the "Submission Types" option to change "file submissions" to "online text."<br /><br /> <em>Which features change between the two formats?</em></p>
                                        <a href="https://docs.moodle.org/36/en/Assignment_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Make an offline assignment<span style="padding: .5vw;"><img src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/assignment%20%281%29.svg" alt="assignment icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">Include assignments that are completed entirely offline to your grade book by adjusting the "Setup" in your <a href="https://kb.brandeis.edu/display/LTS/Using+the+Gradebook" target="_blank" rel="noopener noreferrer">Grade book.</a> <br /><br /> <em>Try changing the grading scale.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Grader_report" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="height: 5vh"></div>
                        <div class="row">
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Add a quiz<span style="padding: .5vw;"><img src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/quiz.svg" alt="quiz icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">Make <a href="https://kb.brandeis.edu/display/LTS/Quiz+Your+Students+Using+LATTE" target="_blank" rel="noopener noreferrer">a quiz</a> to assess student comprehension. Include at least one of each type of question: multiple choice, true/false, short answer, and essay.<br /><br /> <em> Try setting the open and close dates for the <a href="https://www.lynda.com/Moodle-tutorials/Quiz/511293/583710-4.html" target="_blank" rel="noopener noreferrer">quiz</a> and limiting the number of attempts allowed.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Quiz_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Grade an assignment<span style="padding: .5vw;"><img style="background-color: orange; border-radius: 2px;" src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/baseline-grid_on-24px.svg" alt="gradebook icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">Give a numerical grade and some comments on an assignment.<br /><br /> <em> Hint: You can grade the "offline" assignment you just created.</em></p>
                                        <a href="https://docs.moodle.org/36/en/Grading_quick_guide" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex">
                                <div class="card flex-fill" style="margin: 5px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                                    <div style="background-color: #115; height: 15vh; text-align: center;"><h5 class="card-title" style="padding: .5vw; color: white; font-weight: bold; margin-top: 10%;">Give feedback on a discussion post<span style="padding: .5vw;"><img src="https://moodle2.brandeis.edu/draftfile.php/1226073/user/draft/683150498/forum.svg" alt="forum icon" role="presentation" /></span></h5></div>
                                    <div class="card-body">
                                        <p class="card-text">Post to the discussion forum and then post some feedback on that post.<br /><br /> <em> How would you record a grade for each student on a forum post?</em></p>
                                        <a href="https://docs.moodle.org/36/en/Forum_activity" target="_blank" rel="noopener noreferrer">Need a hint?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Activities; 