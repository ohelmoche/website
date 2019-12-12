
import React from "react";
import { MDBContainer, MDBBtn, MDBIcon, MDBCol } from "mdbreact";

const Form = ({ onChange, username, email, phone, montant, motif, devise, onSubmit }) => (
    <MDBContainer>

        <form className="mt-4">


            <div className="input-group input-group-md px-2 mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text white grey-text" id="basic-addon9">
                        <MDBIcon icon="user-alt" />
                    </span>
                </div>
                <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                    value={username} onChange={onChange} name='username' placeholder="Nom"
                    aria-describedby="basic-addon9" />
            </div>



            <div className="input-group input-group-md px-2 mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text white grey-text" id="basic-addon10">
                        <MDBIcon far icon="envelope" />
                    </span>
                </div>
                <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                    value={email} onChange={onChange} name='email'
                    aria-describedby="basic-addon10" />
            </div>

            <div className="input-group input-group-md px-2 mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text white grey-text" id="basic-addon10">
                        <MDBIcon icon="phone" />
                    </span>
                </div>
                <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Telephone"
                    value={phone} onChange={onChange} name='phone'
                    aria-describedby="basic-addon10" />
            </div>

            <div className="input-group input-group-md px-2 mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text white grey-text" id="basic-addon10">
                        <MDBIcon far icon="question-circle" />
                    </span>
                </div>
                <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Motif"
                    value={motif} onChange={onChange} name='motif'
                    aria-describedby="basic-addon10" />
            </div>

          

            <div className="d-flex justify-content-start pb-2 pl-2">
                <div className="pr-2" >
                    <input
                        label="montant"
                        value={montant}
                        name="montant"
                        style={{ height: 38 }}
                        onChange={onChange}
                        placeholder="Montant"
                        type="numeric"
                    />
                </div>
                <div className="">
                    {/* metre la devise */}
                    <select className="browser-default custom-select">
                        <option value="1">Shekel</option>
                        <option value="2">Euro</option>
                    </select>
                </div>
            </div>

            <MDBCol md="4" className="mb-3">
                <div className="custom-control custom-checkbox pl-3">
                    <input className="custom-control-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="custom-control-label" htmlFor="invalidCheck">
                        J'accepte les terms de conditions
                </label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                </div>
            </MDBCol>


            <div className="text-center mt-4">
                <MDBBtn onClick={onSubmit} color="indigo" >Envoyer</MDBBtn>
            </div>

        </form>
    </MDBContainer>
);


export default Form
