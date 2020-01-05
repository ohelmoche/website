
import React from "react";
import { MDBContainer, MDBCardHeader, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import Snif from './snif'

import { withFirebase } from './../../services/firebase';
import { connect } from 'react-redux'

import Notification from '../Notification'


class NousContacter extends React.Component {

    state = {
        username: '',
        email: '',
        message: '',
        errors: {
            email: ''
        },
        openNotificationSuccess: false,
        openNotificationError: false,
    }

    componentDidMount = () => {
        if (this.props.user !== undefined) {
            this.setState({
                email: this.props.user.email,
                username: this.props.user.displayName
            })
        }
    }



    onSubmit = async () => {
        let { email, username, message, errors } = this.state
        if (errors.email !== '' && username !== '' && message !== '') {
            await this.props.firebase.contact().add({
                email,
                username,
                message,
            })
                .then(() => {
                    this.setState({ openNotificationSuccess: true })
                    console.log("contact successfully written!");
                })
                .catch((error) => {
                    this.setState({ openNotificationError: true })
                    console.error("Error writing contact: ", error);
                });
        } else {
            this.setState({ openNotificationError: true })
        }

    }

    onChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validateEmail(value)
                        ? ''
                        : 'Email n\'est pas valide!';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
         //    console.log(errors)
        })
    };


    render() {
        return (
            <MDBContainer className="justify-content-between pb-10" >

                <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white">
                    <h2 className="mr-4 mb-0 ">Nous Contacter</h2>
                </MDBCardHeader>

                <MDBRow className="pt-5" >
                    <MDBCol md="6">
                        <Snif name="Paris" adresse="2 rue de Thionville, 75019 Paris" mail="ohelmocheparis@gmail.com" telephone="0603091803" coordinate="3YtCeZlJoBSkq" />
                    </MDBCol>
                    <MDBCol md="6">
                        <Snif name="Jerusalem" adresse="30 Hapisga" mail="ohelmochejerusalem@gmail.com" telephone="+972527631836" coordinate='3YtCeZlJoBSkq' />
                    </MDBCol>
                </MDBRow>

                <MDBCardHeader className="pt-5 font-weight-bold d-flex justify-content-center text-dark bg-white">
                    <p className="mr-4 mb-0 ">Nous laisser un message</p>
                </MDBCardHeader>

                <MDBContainer >
                    <div className="mt-4">
                        <div className="d-md-flex flex-md-fill">
                            <div className="input-group input-group-md px-2 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon9">1</span>
                                </div>
                                <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Nom"
                                    value={this.state.username || '' } onChange={this.onChange} name='username'
                                    aria-describedby="basic-addon9" />
                            </div>
                            <div className="input-group input-group-md px-2 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon10">2</span>
                                </div>
                                <input type="email" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                                    value={this.state.email || ''} onChange={this.onChange} name='email'
                                    aria-describedby="basic-addon10" />
                            </div>
                        </div>

                        <div className="form-group px-2">
                            <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" value={this.state.message || ''} onChange={this.onChange} name='message'
                                placeholder="ecrire votre demande ici..."></textarea>
                        </div>

                        {this.state.errors.email.length > 0 &&
                            <span className='text-danger pl-2 pt-0 m-0'>{this.state.errors.email}</span>}

                        <div className="text-center mt-4">
                            <MDBBtn onClick={this.onSubmit} color="primary">Envoyer</MDBBtn>
                        </div>
                    </div>
                </MDBContainer>
                <Notification handleClose={() => { this.setState({ openNotificationError: false }) }} open={this.state.openNotificationError} message={"problem d'envoie du message "} variant={"error"} />
                <Notification handleClose={() => { this.setState({ openNotificationSuccess: false }) }} open={this.state.openNotificationSuccess} message={"Message envoyée"} variant={"success"} />

            </MDBContainer>
        )
    }

}

function validateEmail(email) {
    // eslint-disable-next-line 
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}



export default (connect(mapStateToProps)(withFirebase(((NousContacter)))))
