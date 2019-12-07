import React, { Component } from 'react'

import { MDBContainer, MDBRow } from "mdbreact";


class Question extends Component {

    state = {
        radio: 0,
        indexQuestion: null,
        reponseSelected: ''
    }

    componentDidMount() {
        this.setState({
            indexQuestion: this.props.details.index
        })
    }


    onClick = (radioSelected, bonneReponse, reponses) => () => {
        if (!this.props.valid) {
            if (bonneReponse === reponses) {
                this.props.setResult(1, this.state.indexQuestion)
            } else {
                this.props.setResult(0, this.state.indexQuestion)
            }

            this.setState({
                radio: radioSelected,
                reponseSelected: reponses
            });
        }
    }

    result(res, index) {
        this.props.result(res, index)
    }

    componentDidUpdate = () => {

    }
    render() {

        const { question, reponses, bonneReponse, comment } = this.props.details
        const { radio } = this.state


        const afficheResult = this.props.valid &&
            <p md="3" className="font-weight-bold ">
                {comment}
            </p>

        const color = (this.props.valid && this.state.reponseSelected !== bonneReponse) ? "font-weight-bold text-danger" : "font-weight-bold text-primary"


        let afficheReponse = Object
            .keys(reponses)
            .map(obj => (
                <MDBRow className="mt-2" key={obj} >
                    <div className="form-check" >
                        <input
                            className="form-check-input"
                            onChange={this.onClick(obj, bonneReponse, reponses[obj])}
                            checked={radio === (obj) ? true : false}
                            type="radio"
                        />
                        <label className={`form-check-label ${this.props.valid && bonneReponse === reponses[obj] && color} `} htmlFor="exampleRadios1"  >
                            {reponses[obj]}
                        </label>
                    </div>
                </MDBRow>
            ))

        return (
            <MDBContainer className="mt-3">
                <MDBRow className="mt-2">
                    <h6>{question}</h6>
                </MDBRow>
                {afficheReponse}
                <MDBRow className="mt-2">
                    {afficheResult}
                </MDBRow>
                <hr className="my-5" />
            </MDBContainer>
        )
    }

}



export default Question