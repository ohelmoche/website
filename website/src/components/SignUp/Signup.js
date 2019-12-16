import React from "react";
import { MDBModalFooter, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';


const FormPage = ({ passwordTwo, username, changeHandler, passwordOne, email, onSubmit , isLoading }) => {
    return (
        <>
            <MDBCardBody className="mx-2">
                <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                        <p>S'enregistré</p>
                    </h3>
                </div>
                <MDBInput
                    label="Votre nom"
                    group
                    value={username}
                    onChange={changeHandler}
                    type="text"
                    name="username"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Votre email"
                    group
                    value={email}
                    onChange={changeHandler}
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Votre mot de passe"
                    group
                    value={passwordOne}
                    onChange={changeHandler}
                    type="password"
                    name="passwordOne"
                    validate
                    containerClass="mb-0"
                />
                <MDBInput
                    label="Confirmé votre mot de passe"
                    group
                    value={passwordTwo}
                    onChange={changeHandler}
                    type="password"
                    name="passwordTwo"
                    validate
                    containerClass="mb-0"
                />

                <div className="text-center mb-3">
                    <MDBBtn
                        type="button"
                        gradient="lighten-1"
                        rounded
                        className="btn-block z-depth-1a"
                        style={{ textTransform: 'none' }}
                        onClick={onSubmit}
                    >
                        {
                            isLoading === false ?
                            <span className='' >S'enregistré</span>
                            :
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        }
                    </MDBBtn>
                </div>

            </MDBCardBody>

            <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p>
                    Vpus avewz un compte ? <Link to='/log-in'>Se connecter</Link>
                </p>
            </MDBModalFooter>
        </>
    )
}

export default FormPage;