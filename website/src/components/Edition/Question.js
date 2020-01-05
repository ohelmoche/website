import React, { Component } from 'react';


import { MDBContainer, MDBCardHeader, MDBMedia, MDBBtn, MDBNavLink, MDBIcon } from "mdbreact";

import { Link } from 'react-router-dom';

import { withFirebase } from './../../services/firebase';

import { withStyles } from '@material-ui/core/styles';
import styles from './../../constants/style'

import Notification from './../Notification'

import { connect } from 'react-redux'

//import Questions from './Questions'

class QuestionEdition extends Component {

    _isMounted = false;

    state = {
        loading: true,
        questions: [],
        level: "",
        openNotification: false,
        loadingQuestion: false,
        LoadingQuestionPlus: false
    }

    componentDidMount = async () => {
        this._isMounted = true;
        await this.getData()
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
        // ramener du server les 10 dernier question par categorie selectionné
        this.setState({ loadingQuestion: true })
        await this.props.firebase.questions().limit(10).get()
            .then(querySnapshot => {

                let questions = []
                querySnapshot.docs.forEach(doc => {
                    let element = doc.data()
                    questions.push({
                        id: doc.id,
                        nomDeLaPerson: element.username || 'non-definis',
                        email: element.email || 'non-definis',
                        nomDuRav: element.rav || 'non-definis',
                        isPrivate: element.isPrivate,
                        question: element.question || 'non-definis',
                        sujet: element.sujet || 'non-definis',
                        valide: element.valide,
                        reponse: element.reponse || 'non-definis'
                    })
                });
                //console.log(questions)
                this._isMounted && this.setState({ questions })
            })
        this._isMounted && this.setState({ loadingQuestion: false })
    }

    deleteQuestionState = (id) => {
        let { questions } = this.state
        questions = questions
            .filter(function (element) {
                return element.id !== id
        })
        this._isMounted && this.setState({ questions })
    }

    updateQuestionState = (id,isPrivate) => {
        let { questions } = this.state
        questions.forEach(element => {
            if( element.id === id ) element.isPrivate = !isPrivate 
        });
        this._isMounted && this.setState({ questions })
    }

    handleDeleteQuestion = async (id) => {
        await this.props.firebase.questions().doc(id).delete().then(() => {
            this.deleteQuestionState(id)
            this.setState({ openNotification:true })
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    handlePrivateQuestion = async (id, isprivate) => {
        await this.props.firebase.questions().doc(id).update({
            isPrivate: !isprivate
        }
        ).then(() => {
            this.updateQuestionState(id,isprivate)
            this.setState({ openNotification:true })
            console.log("Document successfully updating private value!");
        }).catch(function (error) {
            console.error("Error updating private value document: ", error);
        });
    }

    handleReponseQuestion = async (id) => {
        // await this.props.firebase.questions().doc(id).update({
        //     isPrivate: !isprivate
        // }
        // ).then(() => {
        //     this.updateQuestionState(id,isprivate)
        //     console.log("Document successfully updating private value!");
        // }).catch(function (error) {
        //     console.error("Error updating private value document: ", error);
        // });
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

            const { questions , level } = this.state
            // const { classes } = this.props


            if ( level === 'manager' || level === 'devloper' ) {
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
                                    <p className="mr-4 mb-0 d-flex align-items-center"> {questions.length} Question</p>
                                </MDBCardHeader>
                                {/* <MDBTable scrollY maxHeight="300px"> */}
                                {
                                    questions.length > 0
                                    &&
                                    Object.keys(questions)
                                        .map(key =>
                                            <MDBMedia
                                                key={key}
                                                style={{ backgroundColor: '#f5f5f5' }}
                                                className="d-block d-md-flex mt-4 img-thumbnail ">
                                                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                                                    alt="" />
                                                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                    <Link to={`/question-au-rav/${questions[key].id}`} >
                                                        <h5 className="font-weight-bold mt-0 text-dark">
                                                            sujet : { questions[key].sujet } <br/>
                                                            Rav :  {questions[key].nomDuRav} )
                                                                   </h5>
                                                    </Link>
                                                    question : {questions[key].question} <br/>
                                                    reponse : {questions[key].reponse}<br/>
                                                </MDBMedia>


                                                <div className=" ">
                                                    <div className="row d-flex justify-content-end pr-2" >
                                                        <MDBBtn className="pr-4 " rounded outline size="sm" color="danger" onClick={() => this.handleDeleteQuestion(questions[key].id)} > Supprimer Question</MDBBtn>
                                                    </div>
                                                    <div className="row d-flex justify-content-end pr-2">
                                                        <MDBBtn className="" rounded outline size="sm" color={questions[key].isPrivate ? "success" : "danger"} onClick={() => this.handlePrivateQuestion(questions[key].id, questions[key].isPrivate)} >
                                                            {questions[key].isPrivate ? 'Public' : 'Privée'}
                                                        </MDBBtn>
                                                    </div>
                                                    <div className="row d-flex justify-content-end pr-2">
                                                        <MDBBtn className="" rounded outline size="sm"  onClick={() => this.handleReponseQuestion(questions[key].id)} >
                                                           {'Repondre a la question '}
                                                        </MDBBtn>
                                                    </div>
                                                </div>

                                            </MDBMedia>
                                        )
                                }
                                {
                                    this.state.LoadingQuestionPlus === true ?
                                        <div className="d-flex justify-content-center pt-5">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        :
                                        <button
                                            className="btn btn-sm btn-link"
                                            style={{ textTransform: 'none' }}
                                            onClick={this.handleAddQuestions}
                                        > Charger plus de questions</button>
                                }
                                {/* </MDBTable> */}
                            </>
                    }

                    <Notification handleClose={() => { this.setState({ openNotification: false }) }} open={this.state.openNotification} message={"Question mis ajour"} variant={"success"} />
                    
                </MDBContainer>




            )
                }
                else{
                    return(
                        <h1 className="text-center" >Check authorization...</h1>
                    )
                }
        }
    }

}




const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


// export default (withStyles(styles)(Edition))

export default (connect(mapStateToProps)(withFirebase((withStyles(styles)(QuestionEdition)))))
