
import React from "react";
import { MDBContainer, MDBCardHeader, MDBBtn, MDBIcon } from "mdbreact";

import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const FormQuestionAuRav = ({ onChange, username, email, question, onSubmit, isPrivate, sujet, onChangeIsprivate }) => (
    <MDBContainer>
        <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
            <p className="mr-4 mb-0">Poser Votre Question </p>
        </MDBCardHeader>

        <form className="mt-4">
            <div className="container">
                <div className="row">

                    <div className="col-sm">
                        <div className="form-group ">
                            <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" value={question} onChange={onChange} name='question'
                                placeholder="Question..."></textarea>
                        </div>
                    </div>

                    <div className="col-sm">

                        <div className="d-md-flex flex-md-fill">
                            <div className="input-group input-group-md px-2 mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon9">
                                        <MDBIcon icon="user-alt" />
                                    </span>
                                </div>
                                <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                    value={username} onChange={onChange} name='username' placeholder="nom"
                                    aria-describedby="basic-addon9" />
                            </div>
                        </div>

                        <div className="input-group input-group-md px-2 mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text white grey-text" id="basic-addon10">
                                    <MDBIcon far icon="envelope" />
                                </span>
                            </div>
                            <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                                value={email} onChange={onChange} name='email'
                                aria-describedby="basic-addon10" />
                        </div>

                        <div className="d-md-flex flex-md-fill" style={{}}>
                            <div className="input-group input-group-md px-2 mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text white grey-text" id="basic-addon9">
                                        <MDBIcon icon="question" />
                                    </span>
                                </div>
                                <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                    value={sujet} onChange={onChange} name='sujet' placeholder="Sujet question"
                                    aria-describedby="basic-addon9" />
                            </div>
                        </div>

                        <div className="row pl-4">
                            <div className="col-sm pl-0">
                                <div className="d-flex justify-content-start pl-0" >
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={isPrivate} onChange={() => onChangeIsprivate(isPrivate)} value="checkedB" color="primary" />
                                        }
                                        label="Anonyme"
                                    />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="d-flex justify-content-end">
                                    <MDBBtn onClick={onSubmit} color="indigo">Envoyé</MDBBtn>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </div>

        </form>
    </MDBContainer>
);


export default FormQuestionAuRav
