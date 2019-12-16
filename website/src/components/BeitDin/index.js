import React, { Component } from 'react';

import FormBeitDin from './FormBeitDin'

//import FormPessah from './FormPessah'


import { MDBCardHeader, MDBRow, MDBCol } from "mdbreact";

//import Colors from '../../constants/Colors'

class Berahot extends Component {

    state = {
        loading: false,
        username: '',
        email: '',
        question: '',
        visible: false,
        activeItem: "2"
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
            <MDBRow>
                <MDBCol md="2" className="" style={{}} >
                    <div className="pl-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pl-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(87).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pl-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pl-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(89).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pl-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(90).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                </MDBCol>
                <MDBCol md="8" className='p-0 '>

                    <MDBCardHeader className="font-weight-bold justify-content-between text-dark bg-white mb-3">
                        <p className="mr-4 mb-0 text-center">Beit Din בית דין</p>
                    </MDBCardHeader>

                    {/* <MDBNav className="nav-tabs">
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

                    </MDBNav> */}

                            <FormBeitDin onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion} />
                </MDBCol>
                <MDBCol md="2" className="" style={{}}>
                    <div className="pr-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pr-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pr-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pr-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(76).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="pr-2 pb-1" >
                        <img
                            src={'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg'}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }

}




export default Berahot
