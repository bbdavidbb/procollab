import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ProfileModal from './modals/ProfileModal';

let dummyPeople = [ 
    {name: "Person1", school: "a project the does something", id: 10}, // id is just for rendering purposes
    {name: "Person2", school: "a project the does something better", id: 11},
    {name: "Person3", school: "a project the does something worst", id: 12},
    {name: "Person4", school: "a project the does something aassd", id: 13},
  ];

export default class People extends  React.Component {

      dummyRender() {
        return (
            <React.Fragment>
                {dummyPeople.map(p=> (
                <div key={p.id}>
                    <Card>
                        <Card.Header>{p.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                            {p.school}
                         </Card.Text>
                         <Card.Footer>

                        <ProfileModal
                         mainbut ="view profile" 
                         fbut = "message"
                         sbut = "add connection"
                         name = "StudentName"
                         school = "Generic state college"
                         skills = "add skills arr here"
                         projects = "add projects arr here"
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
