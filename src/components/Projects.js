import React from 'react'
import {Card, Button} from 'react-bootstrap'

let dummyProjects = [ 
    {title: "Project1", description: "a project the does something"},
    {title: "Project2", description: "a project the does something better"},
    {title: "Project3", description: "a project the does something worst"},
    {title: "Project4", description: "a project the does something aassd"},
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
                        <Button variant="primary">View</Button>
                        <Button variant="primary">Join</Button>
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
