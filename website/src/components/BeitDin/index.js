import React, { Component } from 'react';

import FormBeitDin from './FormBeitDin'

import FormPessah from './FormPessah'


import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";



class Berahot extends Component {

    state = {
        loading: false,
        username: '',
        email: '',
        question: '',
        visible: false,
        activeItem: "1"
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

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };



    render() {

        const { username, email, question } = this.state

        return (
            <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBNav className="nav-tabs">
                                <MDBNavItem>
                                    <MDBNavLink
                                        to="#"
                                        active={this.state.activeItem === "1"}
                                        onClick={this.toggle("1")}
                                        role="tab"
                                    >
                                        {this.state.activeItem === "1" ? <div className="font-weight-bold mt-0"> Beit din</div> : <>Beit din</>}
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        to="#"
                                        active={this.state.activeItem === "2"}
                                        onClick={this.toggle("2")}
                                        role="tab"
                                    >
                                        {this.state.activeItem === "2" ? <div className="font-weight-bold mt-0"> Pessah </div> : <>Pessah</>}
                                    </MDBNavLink>
                                </MDBNavItem>
                                
                            </MDBNav>
                            <MDBTabContent activeItem={this.state.activeItem}>
                                <MDBTabPane tabId="1" role="tabpanel">
                                    <FormBeitDin onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion} />
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <FormPessah onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion} />
                                </MDBTabPane>
                            </MDBTabContent>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        );
    }

}




export default Berahot
