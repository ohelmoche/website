import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardHeader
} from "mdbreact";



import FormQuestionAuRav from '../QuestionAuRav/FormQuestionAuRav'
import Menu from './Menu'

import "./HomePage.css";
import Actualite from "./Actualite";

class HomePage extends React.Component {

  state = {
    username: '',
    email: '',
    question: '',
  }




  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addQuestion = () => {
    let { username, email, question } = this.state
    console.log(username, email, question)
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const { username, email, question } = this.state

    return (
      <MDBContainer>

        <MDBRow>

          <MDBCol md="10">
              <MDBRow>
                <MDBCol md="6">
                  <FormQuestionAuRav onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion} />
                </MDBCol >
                <MDBCol md="6">
                  <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
                    <p className="mr-4 mb-0">Horaires</p>
                  </MDBCardHeader>
                </MDBCol >
              </MDBRow>
            {/* bare de separation */}
            <hr className="my-5" />     
            <Menu scrollToTop={this.scrollToTop} />

          </MDBCol>
       
          <MDBCol md="2">
            <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
              <p className="mr-4 mb-0">Actualites</p>
            </MDBCardHeader>
            <Actualite />
          </MDBCol>

        </MDBRow>


      </MDBContainer>
    );
  }
}

export default HomePage;
