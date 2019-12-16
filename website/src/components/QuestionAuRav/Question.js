import React, { Component } from 'react';


import { MDBContainer, MDBIcon, MDBMedia, MDBRow, MDBCol, MDBNavLink, MDBCardHeader, MDBBtn } from "mdbreact";

//import Questions from './Questions'
import { withFirebase } from '../../services/firebase';


class Question extends Component {

    myRef = React.createRef();

    state = {
        loading: true,
        question: [],
        commentaires: [],
        commentaire: '',
        idQuestion: '',
        nomCommentaire: '',
        LoadingCommentary: false
    }

    componentDidMount = async () => {
        window.scrollTo(0, 0);
        const idQuestion = this.props.match.params.id
        // window.addEventListener('scroll', this.handleScroll);
        // this.myRef = document.getElementById("footer_screen");
        this.setState({ idQuestion })

        await this.getData(idQuestion)
        await this.getCommetary()

        this.setState({ loading: false })
    }


    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    getData = async (idQuestion) => {
        // ramener du server les 10 dernier question par categorie selectionné
        await this.props.firebase.questions().doc(idQuestion).get()
            .then(doc => {
                if (doc.exists) {
                    let element = doc.data()
                    this.setState({
                        question: {
                            nomDuRav: element.rav || 'non-definis',
                            isPrivate: element.isPrivate || 'non-definis',
                            question: element.question || 'non-definis',
                            sujet: element.sujet || 'non-definis',
                            reponse: element.reponse || 'non-repondu'
                        }
                    })
                    console.log("question receive");
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such question!");
                }
                // this.setState({ questions })
            });
    }

    getCommetary = async () => {
        //chercher ds la db les 10 derniere commentaires
        await this.props.firebase.commentaires().where("idQuestion", "==", this.state.idQuestion)
            .get()
            .then(querySnapshot => {
                let commentaires = []
                querySnapshot.docs.forEach(doc => {
                    let element = doc.data()
                    commentaires.push({
                        nomCommentaire : element.nomCommentaire,
                        commentaire : element.commentaire,
                    })
                });
                this.setState( { commentaires })
            });
    }

    getMoreComentary = async() => {
           await this.getCommetary()
    }


    addCommentaire = async () => {
        let { commentaire, nomCommentaire, idQuestion } = this.state


        await this.props.firebase.commentaires().add({
            nomCommentaire,
            commentaire,
            idQuestion
        })
            .then(() => {
                console.log("commentaire successfully written!");
                this.getCommetary()
            })
            .catch(function (error) {
                console.error("Error writing commentaire: ", error);
            });
    }

    // handleScroll = () => {
    //     let scrollHeight = window.pageYOffset
    //     let positionFooter = (this.myRef.getBoundingClientRect().top - this.myRef.getBoundingClientRect().height)
    //     console.log(window.pageYOffset, positionFooter)

    //     if (!this.state.LoadingCommentary && scrollHeight >= positionFooter) {
    //         this.setState({ LoadingCommentary: true })
    //         console.log("bottom!");
    //         setTimeout(() => {
    //             this.setState({ LoadingCommentary: false })
    //             console.log("finis!");
    //         }, 4000)
    //     }
    // }

    handleAddCommentary = async () => {
        this.setState({ LoadingCommentary: true })
        await this.getMoreComentary()
        this.setState({ LoadingCommentary: false })
    }

    render() {

        const { question, loading, commentaires, commentaire, nomCommentaire } = this.state
        if (this.state.loading === true) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else {
            return (
                <MDBContainer>
                    <MDBRow className="py-3">
                        <MDBCol md="12">

                            <MDBCardHeader className="font-weight-bold d-flex justify-content-start text-dark bg-white pl-0">
                                <MDBNavLink exact to={`/question-au-rav/`} >
                                    <MDBIcon icon="reply" className="pull-right ml-2" />
                                </MDBNavLink>
                                <p className="mr-4 mb-0 d-flex align-items-center"> Question</p>
                            </MDBCardHeader>
                            {
                                loading === false
                                &&
                                <MDBMedia
                                    className="d-block d-md-flex mt-4">
                                    <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" alt="" />
                                    <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">

                                        <h4 className="font-weight-bold mt-0 ">
                                            {question.nomDeLaPerson}
                                            ( Reponse Rav :  {question.nomDuRav} )
                                    </h4>
                                        <span className="font-weight-bold">question  :</span>  {question.question}
                                        <br />
                                        <span className="font-weight-bold">reponse : </span>   {question.reponse}

                                        <MDBMedia className="d-block d-md-flex mt-4">
                                            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">

                                                <div className="form-group pt-3">
                                                    <div className="form-group px-1">
                                                        <p>Votre commentaire</p>
                                                    </div>
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
                                                                        {commentaires[key].nomCommentaire}
                                                                    </h5>
                                                                    {commentaires[key].commentaire}
                                                                </MDBMedia>
                                                            </MDBMedia>
                                                        )
                                                }
                                                {
                                                    this.state.LoadingCommentary === true ?
                                                        <div className="d-flex justify-content-center pt-5">
                                                            <div className="spinner-border text-primary" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        <button
                                                            className="btn btn-sm btn-link"
                                                            style={{ textTransform: 'none' }}
                                                            onClick={this.handleAddCommentary}
                                                        > Charger Plus De Commentaires</button>
                                                }
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

}





export {

}

export default withFirebase(Question)