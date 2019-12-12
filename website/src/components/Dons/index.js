import React from 'react'
import { MDBContainer, MDBCardHeader, MDBRow, MDBCol } from 'mdbreact'

import FomrDons from './FormDons'

class Dons extends React.Component {

    state = {
        username: '',
        phone: '',
        email: '',
        motif: '',
        montant: '',
        devise: 'shekel',
        cb: ''
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleSubmit = () => {
        console.log('handleSubmit')
    }

    render() {
        const { username, email, question, montant, phone, motif, devise } = this.state


        return (
            <MDBContainer >
                <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white mt-0">
                    <p>Payez vos dons en ligne</p>
                </MDBCardHeader>
                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="6">
                            <FomrDons onChange={this.onChange} username={username} phone={phone} montant={montant} motif={motif} devise={devise}
                                email={email} question={question} onSubmit={this.handleSubmit} />
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBContainer>
                                <MDBRow>
                                    <p className="justify-content-center">PHOTO</p>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        )
    }

}

export default Dons

