import React, { Component } from 'react';

import FormQuestionAuRav from './FormQuestionAuRav'

import { MDBContainer, MDBCardHeader, MDBMedia, MDBRow, MDBCol, MDBNavLink, MDBIcon } from "mdbreact";
import MaQuestion from './Question'


import { withFirebase } from '../../services/firebase';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'

import Notification from '../Notification'

//import Questions from './Questions'

class Question extends Component {

    state = {
        loading: true,
        openNotification: false,
        username: '',
        email: '',
        question: '',
        questions: [],
        isPrivate: false,
        categorieSelected: 'ten',
        sujet: '',
        search: '',
        loadingQuestion: false,
        LoadingQuestionPlus: false
    }

    componentDidMount = async () => {
        await this.getData()
        this.setState({ loading: false })
    }


    componentWillUnmount() {
    }


    getData = async () => {
        // ramener du server les 10 dernier question par categorie selectionné
        this.setState({ loadingQuestion: true })
        await this.props.firebase.questions().get()
            .then(querySnapshot => {

                let questions = []
                querySnapshot.docs.forEach(doc => {
                    let element = doc.data()
                    questions.push({
                        id: doc.id,
                        nomDeLaPerson: element.username || 'non-definis',
                        email: element.email || 'non-definis',
                        nomDuRav: element.rav || 'non-definis',
                        isPrivate: element.isPrivate || 'non-definis',
                        question: element.question || 'non-definis',
                        sujet: element.sujet || 'non-definis'
                    })
                });
                this.setState({ questions })
            });
        this.setState({ loadingQuestion: false })
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeIsprivate = (isPrivate) => {
        this.setState({
            isPrivate: !isPrivate
        })
    }

    addQuestion = () => {
        let { username, email, question, isPrivate, sujet } = this.state
        this.setState({ loading: true })

        // Add a new document in collection "questions"
        this.props.firebase.questions().add({
            username,
            email,
            question,
            isPrivate,
            sujet
        })
            .then(() => {
                console.log("Document successfully written!");
                this.setState({ openNotification: true })
                this.getData()
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });


        this.setState({ loading: false })
    }



    handleChangeCategorie = event => {
        console.log(event.target.value);
        this.setState({ categorieSelected: event.target.value })
    };


    handleSearch = () => {
        this.setState({ loadingQuestion: true })
        console.log('search')

        this.getData()

        setTimeout(() => {
            this.setState({ loadingQuestion: false })
        }, 500)
    }

    handleAddQuestions = async() =>{
        this.setState({ LoadingQuestionPlus: true })
        await this.getData()
        this.setState({ LoadingQuestionPlus: false })
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

            const { questions, username, email, question, search, isPrivate } = this.state
            const { classes } = this.props
            return (
                <MDBContainer style={{ paddingTop: 5 }}>
                    <MDBRow className="">
                        <MDBCol md="12">
                            <FormQuestionAuRav onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion}
                                isPrivate={isPrivate} onChangeIsprivate={this.onChangeIsprivate} />
                        </MDBCol>
                        <MDBCol md="12">
                            <MDBContainer>
                                <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
                                    <p className="mr-4 mb-0">Questions</p>
                                </MDBCardHeader>

                                <div className="mt-4">

                                

                                    <div className="input-group input-group-md  pb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text white grey-text" id="basic-addon9">
                                                <MDBIcon icon="search" />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                            value={search} onChange={this.onChange} name='search' placeholder="rechercher une question"
                                            aria-describedby="basic-addon9" />
                                        <button onClick={this.handleSearch} className=" btn-sm btn-link ml-1">Rechercher</button>
                                    </div>

                                    <div className="input-group input-group-md  mb-2">
                                        <FormControl variant="filled" className={classes.formControl} style={{  marginBottom: 2 }}>
                                            <InputLabel id="demo-simple-select-filled-label">Categorie</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={this.state.categorieSelected}
                                                onChange={this.handleChangeCategorie}
                                            >
                                                <MenuItem value="">
                                                    <em>Tout</em>
                                                </MenuItem>
                                                <MenuItem value={'ten'}>הלכה</MenuItem>
                                                <MenuItem value={'twenty'}>מוסר</MenuItem>
                                                <MenuItem value={'thirty'}>גמרא</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>


                                </div>

                                {
                                    this.state.loadingQuestion === true ?
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        :
                                        <>
                                         {/* <MDBTable scrollY maxHeight="300px"> */}
                                            {
                                                questions.length > 0
                                                &&
                                                Object.keys(questions)
                                                    .map(key =>
                                                        <MDBMedia
                                                            key={key}
                                                            className="d-block d-md-flex mt-4">
                                                            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                                                                alt="" />
                                                            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                                <MDBNavLink exact to={`/question-au-rav/${questions[key].id}`} >
                                                                    <h5 className="font-weight-bold mt-0">
                                                                        {questions[key].sujet}
                                                                        ( Reponse Rav :  {questions[key].nomDuRav} )
                                                                   </h5>
                                                                </MDBNavLink>
                                                                {questions[key].question}
                                                            </MDBMedia>
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
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>


                    <Notification handleClose={() => { this.setState({ openNotification: false }) }} open={this.state.openNotification} message={"Question envoyée"} variant={"success"} />


                </MDBContainer >

            )
        }
    }

}





export {
    MaQuestion
}

export default withFirebase(withStyles(styles)(Question))