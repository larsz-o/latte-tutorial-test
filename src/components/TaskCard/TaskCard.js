import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class TaskCard extends Component {
    render() {
        return (
            <Card className="card-latte">
                <Card.Header>
                    <Card.Title className="card-title-container">
                        <h5 className="card-title">{this.props.data.title}</h5>
                        {/* give a background color to the gradebook icon, and only that icon*/}
                        {this.props.data.img === 'baseline-grid_on-24px.svg' && <img className="icon-align grade-img" src={require('../Icons/' + this.props.data.img)} alt="gradebook" />}
                        {this.props.data.img !== 'baseline-grid_on-24px.svg' && <img className="icon-align" src={require('../Icons/' + this.props.data.img)} alt={this.props.data.img} height="24px" />}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{ __html: this.props.data.text }} />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default TaskCard; 