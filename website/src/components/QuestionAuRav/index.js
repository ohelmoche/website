import React, { Component } from 'react';

import FormQuestionAuRav from './FormQuestionAuRav'

import { MDBContainer, MDBCardHeader, MDBMedia, MDBRow, MDBCol, MDBNavLink, MDBIcon } from "mdbreact";
import MaQuestion from './Question'


import Questions from './Questions'

class Question extends Component {

    state = {
        loading: false,
        username: '',
        email: '',
        question: '',
        questions: Questions,
        search: ''
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }


    getData = () => {
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addQuestion = () => {
        let { questions, username, email, question } = this.state
        questions.push(
            {
                nomDeLaPerson: username,
                email: email,
                nomDuRav: 'rav cohen',
                Private: false,
                question: question
            })
        this.setState({ questions })
    }


    render() {

        const { questions, username, email, question, search } = this.state
        return (
            <MDBContainer>
                <MDBRow className="">
                    <MDBCol md="6">
                        <FormQuestionAuRav onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion} />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBContainer>
                        <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
                                <p className="mr-4 mb-0">Questions</p>
                            </MDBCardHeader>

                            <form className="mt-4">
                                <div className="input-group input-group-md px-2 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text white grey-text" id="basic-addon9">
                                            <MDBIcon icon="search" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                        value={search} onChange={this.onChange} name='search' placeholder="rechercher une question"
                                        aria-describedby="basic-addon9" />
                                </div>

                                {
                                    Object.keys(questions)
                                        .map(key =>
                                            <MDBMedia
                                                key={key}
                                                className="d-block d-md-flex mt-4">
                                                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                                                    alt="" />
                                                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                    <MDBNavLink exact to={`/question-au-rav/${key}`} >
                                                        <h5 className="font-weight-bold mt-0">
                                                            {questions[key].nomDeLaPerson}
                                                            ( Reponse Rav :  {questions[key].nomDuRav} )
                                            </h5>
                                                    </MDBNavLink>
                                                    {questions[key].question}
                                                </MDBMedia>
                                            </MDBMedia>
                                        )
                                }
                            </form>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }

}





export {
    MaQuestion
}

export default Question
