
import React from "react";
import { MDBContainer,  MDBCardHeader, MDBBtn } from "mdbreact";
import Snif from './snif'

class NousContacter extends React.Component{

    state = {
        nom : '',
        email: '',
        message: ''
    }

    onSubmit = () =>{

    }

    render() {
        return (
            <MDBContainer className="justify-content-between pb-10" >
                <MDBContainer style={{ paddingBottom: 60 }}>
                    <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white">
                        <p className="mr-4 mb-0 ">Nous Contacter</p>
                    </MDBCardHeader>
                    <MDBContainer className="justify-content-between d-flex" >
                        <Snif name="Paris" adresse="2 rue de Thionville, 75019 Paris" mail="ohelmocheparis@gmail.com" telephone="0603091803" coordinate="3YtCeZlJoBSkq" />
                        <Snif name="Jerusalem" adresse="30 Hapisga" mail="ohelmochejerusalem@gmail.com" telephone="+972527631836" coordinate='3YtCeZlJoBSkq' />
                    </MDBContainer>
                </MDBContainer>
                <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white">
                    <p className="mr-4 mb-0 ">Nous laisser un message</p>
                </MDBCardHeader>
                <MDBContainer >
                    <form className="mt-4">
                        <div className="d-md-flex flex-md-fill">
                            <div className="input-group input-group-md px-2 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon9">1</span>
                                </div>
                                <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Nom"
                                    value={this.state.nom} onChange={e => this.setState({ nom:e.target.value })} name='nom'
                                    aria-describedby="basic-addon9" />
                            </div>
                            <div className="input-group input-group-md px-2 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon10">2</span>
                                </div>
                                <input type="email" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                                    value={this.state.email} onChange={e =>this.setState({ email:e.target.value })} name='email'
                                    aria-describedby="basic-addon10" />
                            </div>
                        </div>

                        <div className="form-group px-2">
                            <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" value={this.state.message} onChange={e =>this.setState({ message:e.target.value })} name='message'
                                placeholder="ecrire votre demande ici..."></textarea>
                        </div>

                        <div className="text-center mt-4">
                            <MDBBtn onClick={this.onSubmit} color="primary">Envoyer</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>

            </MDBContainer>
        )
    }

}



export default NousContacter
