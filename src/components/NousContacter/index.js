
import React from "react";
import { MDBContainer,  MDBCardHeader, MDBBtn } from "mdbreact";

const FormQuestionAuRav = ( { onChange ,   username , email , question , onSubmit } ) => (
    <MDBContainer>
        <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
            <p className="mr-4 mb-0">Nous Contacter</p>
        </MDBCardHeader>
        <form className="mt-4">

            <div className="d-md-flex flex-md-fill">
                <div className="input-group input-group-md px-2 mb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text white grey-text" id="basic-addon9">1</span>
                    </div>
                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Username"
                        value={username} onChange={onChange} name='username'
                        aria-describedby="basic-addon9" />
                </div>
                <div className="input-group input-group-md px-2 mb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text white grey-text" id="basic-addon10">2</span>
                    </div>
                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                        value={email} onChange={onChange} name='email'
                        aria-describedby="basic-addon10" />
                </div>
            </div>

            <div className="form-group px-2">
                <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6"  value={question} onChange={onChange} name='question'
                placeholder="Write something here..."></textarea>
            </div>

            <div className="text-center mt-4">
                <MDBBtn onClick={onSubmit} color="primary">Envoyer</MDBBtn>
            </div>
        </form>
    </MDBContainer>
);


export default FormQuestionAuRav
