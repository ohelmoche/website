import React, { Component } from 'react';


import { MDBContainer, MDBIcon, MDBMedia, MDBRow, MDBCol, MDBNavLink, MDBCardHeader, MDBBtn } from "mdbreact";

import Questions from './Questions'


import Commentaire from './Commentaire'

class Question extends Component {

    state = {
        loading: true,
        question: Questions[0],
        commentaires: [],
        commentaire: '',
        idQuestion: '',
        nomCommentaire: ''
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const idQuestion = this.props.match.params.id
        let commentaires = []
        Commentaire.forEach(commentaire => {
            if (commentaire.idQuestion === idQuestion) commentaires.push(commentaire)
        });
        this.setState({ loading: false, question: Questions[idQuestion], idQuestion, commentaires })
    }


    componentWillUnmount() {
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    addCommentaire = () => {
        let { commentaire, nomCommentaire, idQuestion, commentaires } = this.state
        Commentaire.push({
            nomDeLaPerson: nomCommentaire,
            idQuestion: idQuestion,
            commentaire: commentaire
        })
        commentaires = []
        Commentaire.forEach(commentaire => {
            if (commentaire.idQuestion === idQuestion) commentaires.push(commentaire)
        });
        this.setState({ commentaires, commentaire: '', nomCommentaire: '' })
    }

    render() {

        const { question, loading, commentaires, commentaire, nomCommentaire } = this.state
        return (
            <MDBContainer>
                <MDBRow className="py-3">
                    <MDBCol md="12">
                        <MDBNavLink exact to={`/question-au-rav/`} >
                            <MDBIcon icon="reply" className="pull-right ml-2" />
                        </MDBNavLink>
                        <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
                            <p className="mr-4 mb-0"> Question</p>
                        </MDBCardHeader>
                        {
                            loading === false
                            &&
                            <MDBMedia
                                className="d-block d-md-flex mt-4">
                                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" alt="" />
                                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">

                                    <h4 className="font-weight-bold mt-0">
                                        {question.nomDeLaPerson}
                                        ( Reponse Rav :  {question.nomDuRav} )
                                    </h4>
                                    <span className="font-weight-bold">question  :</span>  {question.question} 
                                    <br/>
                                    <span className="font-weight-bold">reponse : </span>   {question.question}
                                
                                    <MDBMedia className="d-block d-md-flex mt-4">    
                                        <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                        <h5 htmlFor="quickReplyFormComment">Commentaires {commentaires.length}</h5>

                                            {
                                                Object.keys(commentaires)
                                                    .map(key =>
                                                        <MDBMedia
                                                            key={key}
                                                            className="d-block d-md-flex mt-4">
                                                            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (3).jpg" alt="" />
                                                            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                                <h5 className="font-weight-bold mt-0">
                                                                    {commentaires[key].nomDeLaPerson}
                                                                </h5>
                                                                {commentaires[key].commentaire}
                                                            </MDBMedia>
                                                        </MDBMedia>
                                                    )
                                            }
                                            <div className="form-group">
                                                <div className="form-group px-1">
                                                    <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                                        value={nomCommentaire} onChange={this.onChange} name='nomCommentaire' placeholder="nom"
                                                        aria-describedby="basic-addon9" />
                                                </div>
                                                <div className="form-group px-1">
                                                    <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6"
                                                        value={commentaire} onChange={this.onChange} name='commentaire'
                                                        placeholder="Commentaire..."></textarea>
                                                </div>
                                                <div className="text-center my-1">
                                                    <MDBBtn size="sm" color="primary" onClick={this.addCommentaire}>Post</MDBBtn>
                                                </div>
                                            </div>
                                        </MDBMedia>
                                    </MDBMedia>
                                </MDBMedia>
                            </MDBMedia>
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}





export {

}

export default Question
