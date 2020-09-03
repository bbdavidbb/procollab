import React from 'react';
import { Redirect } from 'react-router';
import { Button, Card, FormGroup, FormControl, FormLabel, InputGroup } from "react-bootstrap";
import ImageUploader from 'react-images-upload';
import './css/SignUp.css'

export default class SignUp extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        headline: "",
        school: "",
        response: "",
        pictures: [],
        skills: "",
        redirect: false
    };

    
    //  link up api calls and input validation
    createAccount = async event => {
      this.setState({redirect: true});
      // skills array
      //let skillArr = this.state.skills.split("\n");

      // order of payload 
      /*
      fullName
      profile_picture
      headline
      school
      email password
      skills
      */

    }
    

    render() {
      if (this.state.redirect) {
        return <Redirect push to="/Login" />;
       }

        return (
            <div className="SignUp" >
            <Card style = {{ width: '30rem', height: '62rem'}} bg ='dark' text='light'>
              <Card.Body>
               <Card.Title>Sign Up</Card.Title>
              <form onSubmit={this.createAccount}>
              <FormGroup controlId="name">
                  <FormLabel style = {{color: 'white'}}>Name</FormLabel>
                  <FormControl
                    autoFocus
                    type="name"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                    placeholder="Enter your name"
                  />
                </FormGroup>

                <FormGroup controlId="email">
                  <FormLabel style = {{color: 'white'}}>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    placeholder="Enter Email"
                  />
                </FormGroup>

                <FormGroup controlId="password">
                  <FormLabel style = {{color: 'white'}}>Password</FormLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                    placeholder="Enter password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup controlId="confirmPassword">
                  <FormLabel style = {{color: 'white'}}>Confirm Password</FormLabel>
                  <FormControl
                    value={this.state.confirmPassword}
                    onChange={e => this.setState({confirmPassword: e.target.value})}
                    placeholder="Confirm password"
                    type="password"
                  />
                </FormGroup>

                <FormGroup controlId="headline">
                  <FormLabel style = {{color: 'white'}}>Headline</FormLabel>
                  <FormControl
                    value={this.state.headline}
                    onChange={e => this.setState({headline: e.target.value})}
                    placeholder="Headline quote here"
                  />
                </FormGroup>

                <FormGroup controlId="school">
                  <FormLabel style = {{color: 'white'}}>School</FormLabel>
                  <FormControl
                    value={this.state.school}
                    onChange={e => this.setState({school: e.target.value})}
                    placeholder="Enter you college here"
                  />
                </FormGroup>

                <div style ={{paddingTop: '15px'}}>
                <ImageUploader
                withIcon={true}
                buttonText='Add a profile picture'
                onChange={(picture) => this.setState({pictures: this.state.pictures.concat(picture)})}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={10485760}
                />
                </div>

                <div style ={{paddingTop: '15px'}}>
                <InputGroup>
                 <InputGroup.Prepend>
                  <InputGroup.Text>List skills; one per line </InputGroup.Text>
                 </InputGroup.Prepend>
                 <FormControl as="textarea" aria-label="With textarea" 
                  value={this.state.skills}
                  onChange={e =>this.setState({skills: e.target.value})}
                 />
                </InputGroup>
                </div>

                <div style ={{paddingTop: '15px'}}>
                <Card.Footer>
                <Button
                  block
                  size="big"
                  type="submit"
                  variant="danger"
                >
                  Create Account
                </Button>
                </Card.Footer>
                </div>
                </form>
             </Card.Body>
            </Card>
          </div>
        );
    }
}