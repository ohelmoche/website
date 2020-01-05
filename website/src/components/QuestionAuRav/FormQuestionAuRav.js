
import React from "react";
import { MDBContainer, MDBCardHeader, MDBBtn, MDBIcon } from "mdbreact";

import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const FormQuestionAuRav = ({ onChange, username, email, question, onSubmit, isPrivate, onChangeIsprivate , errors }) => (
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
                         {errors.question.length > 0 && 
                        <span className='text-danger p-0 m-0'>{errors.question}</span>}
                    </div>
                   

                    <div className="col-sm">

                        {
                            !isPrivate &&
                            <div className="d-md-flex flex-md-fill">
                                <div className="input-group input-group-md px-2 ">
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
                        }
                          { !isPrivate && errors.username.length > 0 && 
                                 <span className='text-danger pl-2 m-0'> {errors.username}</span>}

                        <div className="input-group input-group-md px-2 mt-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text white grey-text" id="basic-addon10">
                                    <MDBIcon far icon="envelope" />
                                </span>
                            </div>
                            <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                                value={email} onChange={onChange} name='email'
                                aria-describedby="basic-addon10" />
                        </div>
                        {  errors.email.length > 0 && 
                                 <span className='text-danger pl-2 m-0'> {errors.email}</span>}

                        <div className="row pl-4 mt-2 ">
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
                                <div className="d-flex justify-content-end " >
                                    <MDBBtn  style={{ textTransform: 'none' , paddingTop: 5 , paddingBottom: 5}} onClick={onSubmit} color="indigo">Envoyé</MDBBtn>
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
