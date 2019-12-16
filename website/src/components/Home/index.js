import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardHeader
} from "mdbreact";

import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'


//import FormQuestionAuRav from '../QuestionAuRav/FormQuestionAuRav'
import Menu from './Menu'

import "./HomePage.css";
import Actualite from "./Actualite";

class HomePage extends React.Component {

  state = {
    username: '',
    email: '',
    question: '',
    loading: true,
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 200)
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

    if (this.state.loading === true) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    } else {
      const { classes } = this.props;
      return (
        <MDBContainer>
          <MDBRow>

            <MDBCol md="10">
              <Menu classes={classes} scrollToTop={this.scrollToTop} />
            </MDBCol>

            <MDBCol md="2">
              <div className="pl-2 pb-1 pt-1" >
                <img
                  src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(120).jpg'}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
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
}

export default withStyles(styles)(HomePage);