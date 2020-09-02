import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ViewModal from './modals/ViewModal';
import JoinModal from './modals/JoinModal';
import ProfileModal from './modals/ProfileModal';

let dummyProjects = [ 
    {title: "Project1", description: "a project the does something", participants: ["Gotrek", "Felix"]},
    {title: "Project2", description: "a project the does something better", participants: ["Gotrek", "Felix", "Thanqol"]},
    {title: "Project3", description: "a project the does something worst", participants: ["Gotrek", "Felix", "Kislev"]},
    {title: "Project4", description: "a project the does something aassd", participants: ["Gotrek", "Felix", "Moulder"]},
  ];

export default class Projects extends  React.Component {

      dummyRender() {
        return (
            <React.Fragment>
                {dummyProjects.map(p=> (
                <div key={p}>
                    <Card>
                        <Card.Header>{p.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                            {p.description}
                         </Card.Text>
                         <Card.Footer>
                        <ViewModal
                         mainbut ="view" 
                         fbut = "message"
                         sbut = "apply"
                         title = {p.title}
                         description = {p.description}
                         participants = {p.participants}
                        />

                        <JoinModal
                        mainbut = "join"
                        title = {p.title}
                        description = {p.description}
                        fbut = "send"
                        />
                        </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
                ))}
            </React.Fragment>
        );
        }

    render() {
        return (
            <React.Fragment>
                {this.dummyRender()}
            </React.Fragment>
        );
    }
    
}
