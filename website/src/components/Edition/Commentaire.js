import React, { Component } from 'react';


import { MDBContainer, MDBMedia, MDBBtn, MDBNavLink, MDBIcon, MDBCardHeader } from "mdbreact";


import { withFirebase } from './../../services/firebase';

import { withStyles } from '@material-ui/core/styles';
import styles from './../../constants/style'

import Notification from './../Notification'


import { connect } from 'react-redux'

//import Questions from './Questions'

class CommentaireEdition extends Component {

    _isMounted = false;

    state = {
        loading: true,
        level: '',
        commentaires: [],
        openNotification: false,
        loadingQuestion: false,
        LoadingQuestionPlus: false
    }

    componentDidMount = async () => {
        this._isMounted = true;
        await this.getData()
        // this.isMounted && 
        this._isMounted && this.setState({
            level: this.props.user.level,
            loading: false 
        })
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    static getDerivedStateFromProps(props, state) {
        if (state.level !== props.user.level) {
            return {
                level: props.user.level
            }
        }else{
            return state
        }
    }



    getData = async () => {
        //chercher ds la db les 10 derniere commentaires
        this.setState({ loadingQuestion: true })
        await this.props.firebase.commentaires()
            .get()
            .then(querySnapshot => {
                let commentaires = []
                querySnapshot.docs.forEach(doc => {
                    let element = doc.data()
                    commentaires.push({
                        id: doc.id,
                        nomCommentaire: element.nomCommentaire,
                        commentaire: element.commentaire,
                        isPrivate: element.isPrivate
                    })
                });
                this._isMounted && this.setState({ commentaires })
                this._isMounted && this.setState({ loadingQuestion: false })
            })
            .catch(function (error) {
                console.debug("Error get commentary: ", error);
            });

    }

    deleteCommentaireState = (id) => {
        let { commentaires } = this.state
        commentaires = commentaires
            .filter(function (element) {
                return element.id !== id
        })
        this._isMounted && this.setState({ commentaires })
    }

    updateCommentaireState = (id,isPrivate) => {
        let { commentaires } = this.state
        commentaires.forEach(element => {
            if( element.id === id ) element.isPrivate = !isPrivate 
        });
        this._isMounted && this.setState({ commentaires })
    }

    handleDeleteCommentaire = async (id) => {
        await this.props.firebase.commentaires().doc(id).delete().then(() => {
            this.deleteCommentaireState(id)
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.debug("Error removing document: ", error);
        });
    }

    handlePrivateCommentaire = async (id, isprivate) => {
        await this.props.firebase.commentaires().doc(id).update({
            isPrivate: !isprivate
        }
        ).then(() => {
            this.updateCommentaireState(id,isprivate)
            console.log("Document successfully updating private value!");
        }).catch(function (error) {
            console.debug("Error updating private value document: ", error);
        });
    }







    render() {

        if (this.state.loading === true) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else {

            const { commentaires } = this.state
            // const { classes } = this.props

            return (
                <MDBContainer style={{ paddingTop: 5 }}>
                    {
                        this.state.loadingQuestion === true ?
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            :
                            <>
                                <MDBCardHeader className="font-weight-bold d-flex justify-content-start text-dark bg-white pl-0">
                                    <MDBNavLink exact to={`/edition`} >
                                        <MDBIcon icon="reply" className="pull-right ml-2" />
                                    </MDBNavLink>
                                    <p className="mr-4 mb-0 d-flex align-items-center"> {commentaires.length} Commentaires</p>
                                </MDBCardHeader>
                                {
                                    Object.keys(commentaires)
                                        .map(key =>
                                            <MDBMedia
                                                key={key}
                                                style={{ backgroundColor: '#f5f5f5' }}
                                                className="d-block d-md-flex mt-4 img-thumbnail">
                                                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                    <h5 className="font-weight-bold mt-0">
                                                        {commentaires[key].nomCommentaire}
                                                    </h5>
                                                    {commentaires[key].commentaire}
                                                </MDBMedia>
                                                <div className=" ">
                                                    <div className="row d-flex justify-content-end pr-2" >
                                                        <MDBBtn className="pr-4 " rounded outline size="sm" color="danger" onClick={() => this.handleDeleteCommentaire(commentaires[key].id)} > Supprimer Le commentaire</MDBBtn>
                                                    </div>
                                                    <div className="row d-flex justify-content-end pr-2">
                                                        <MDBBtn className="" rounded outline size="sm" color={commentaires[key].isPrivate ? "success" : "danger"} onClick={() => this.handlePrivateCommentaire(commentaires[key].id, commentaires[key].isPrivate)} >
                                                            {commentaires[key].isPrivate ? 'Public' : 'Privée'}
                                                        </MDBBtn>
                                                    </div>
                                                </div>
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
                            </>
                    }

                    <Notification handleClose={() => { this.setState({ openNotification: false }) }} open={this.state.openNotification} message={"Question envoyée"} variant={"success"} />
                </MDBContainer>


            )
        }
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


// export default (withStyles(styles)(Edition))

export default (connect(mapStateToProps)(withFirebase((withStyles(styles)(CommentaireEdition)))))
