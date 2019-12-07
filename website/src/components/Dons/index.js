import React from 'react'
import { MDBContainer, MDBInput, MDBCardHeader, MDBRow, MDBCol,MDBBtn } from 'mdbreact'

class Dons extends React.Component {

    state = {
        name: '',
        phone: '',
        mail: '',
        motif: '',
        montant: '',
        Devise: 'shekel',
        cb: ''
    }

    render() {
        return (
            <MDBContainer >
                <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white mt-0">
                    <p>Payez vos dons en ligne</p>
                </MDBCardHeader>
                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBInput
                                label="nom"
                                value={this.state.name}
                                onChange={event => this.setState({ name: event.target.value })}
                                type="text"
                            />
                            <MDBInput
                                label="telephone"
                                value={this.state.phone}
                                onChange={event => this.setState({ phone: event.target.value })}
                                type="text"
                            />
                            <MDBInput
                                label="mail"
                                value={this.state.mail}
                                onChange={event => this.setState({ mail: event.target.value })}
                                type="email"
                            />
                            <MDBInput
                                label="motif"
                                value={this.state.motif}
                                onChange={event => this.setState({ motif: event.target.value })}
                                type="text"
                            />
                                    <MDBInput
                                        label="montant"
                                        value={this.state.montant}
                                        onChange={event => this.setState({ montant: event.target.value })}
                                        type="numeric"
                                    />
                                    <select class="browser-default custom-select">
                                        <option selected>Devise</option>
                                        <option value="1">Shekel</option>
                                        <option value="2">Euro</option>
                                    </select>
                            <MDBInput className=".col-md-6 float-left "
                                label="cb"
                                value={this.state.cb}
                                onChange={event => this.setState({ cb: event.target.value })}
                                type="numeric"
                            />
                            <MDBBtn className="d-flex justify-content-end" color='primary'>Valider</MDBBtn>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBContainer>
                                <p className="justify-content-center">PHOTO</p>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </MDBContainer>
        )
    }

}

export default Dons