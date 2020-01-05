import React, { Component } from 'react';

import FormQuestionAuRav from './FormQuestionAuRav'

import { MDBContainer, MDBCardHeader, MDBMedia, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import MaQuestion from './Question'
import { Link } from 'react-router-dom';

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

    _isMounted = false;

    state = {
        loading: true,
        openNotification: false,
        openNotificationError: false,
        errors: {
            username: '',
            email: '',
            question: '',
        },
        username: '',
        email: '',
        question: '',
        questions: [],
        isPrivate: false,
        categorieSelected: 'ten',
        search: '',
        loadingQuestion: false,
        LoadingQuestionPlus: false
    }

    componentDidMount = async () => {
        this._isMounted = true;
        await this.getData()
        // this.isMounted && 
        this._isMounted && this.setState({ loading: false })
    }


    componentWillUnmount() {
        this._isMounted = false;
    }


    onChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'username':
                errors.username =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validateEmail(value)
                        ? ''
                        : 'Email n\'est pas vlide!';
                break;
            case 'question':
                errors.question =
                    value.length < 6
                        ? 'la question n\'est pas remplie'
                        : '';
                break;
            default:
                break;
        }
        this._isMounted && this.setState({ errors, [name]: value }, () => {
           // console.log(errors)
        })
        //  this._isMounted &&  this.setState({ [event.target.name]: event.target.value });
    };



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
                        isPrivate: element.isPrivate || 'non-definis',
                        question: element.question || 'non-definis',
                        sujet: element.sujet || 'non-definis'
                    })
                });
                this._isMounted && this.setState({ questions })
            });
        this._isMounted && this.setState({ loadingQuestion: false })
    }




    onChangeIsprivate = (isPrivate) => {
        let { errors } = this.state
        if(!this.state.isPrivate){
            errors.username = ''
        }else{
           this.state.username === '' && (errors.username  = 'Full Name must be 5 characters long!')
        }
        this._isMounted && this.setState({
            isPrivate: !isPrivate,
            errors
        })
    }

    addQuestion = () => {
        let { username, email, question, isPrivate } = this.state
        if (this.validateForm( email, question ) ) {
            this._isMounted && this.setState({ loading: true })

            // Add a new document in collection "questions"
            this.props.firebase.questions().add({
                username: isPrivate ? '' : username,
                email,
                question,
                isPrivate: true,
                annonyme: isPrivate,
                reponse: null
            })
                .then(() => {
                    console.log("Document successfully written!");
                    this._isMounted && this.setState({ openNotification: true })
                    this.getData()
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            this._isMounted && this.setState({ loading: false })
        }else{
            this._isMounted && this.setState({ openNotificationError: true })
        }
    }

    validateForm = (email,question) => {
        let valid = true;

        if(email === '' || question === ''){
            valid = false
        }

        Object.values(this.state.errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }



    handleChangeCategorie = event => {
        console.log(event.target.value);
        this._isMounted && this.setState({ categorieSelected: event.target.value })
    };


    handleSearch = () => {
        this._isMounted && this.setState({ loadingQuestion: true })
        console.log('search')

        this.getData()

        setTimeout(() => {
            this._isMounted && this.setState({ loadingQuestion: false })
        }, 500)
    }

    handleAddQuestions = async () => {
        this._isMounted && this.setState({ LoadingQuestionPlus: true })
        await this.getData()
        this._isMounted && this.setState({ LoadingQuestionPlus: false })
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

            const { questions, username, email, question, search, isPrivate, errors } = this.state
            const { classes } = this.props
            return (
                <MDBContainer style={{ paddingTop: 5 }}>
                    <MDBRow className="">
                        <MDBCol md="12">
                            <FormQuestionAuRav onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion}
                                isPrivate={isPrivate} onChangeIsprivate={this.onChangeIsprivate} errors={errors} />
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
                                        <FormControl variant="filled" className={classes.formControl} style={{ marginBottom: 2 }}>
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
                                                            style={{ backgroundColor: '#f5f5f5' }}
                                                            className="d-block d-md-flex mt-4 img-thumbnail ">
                                                            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                                                                alt="" />
                                                            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                                <Link to={`/question-au-rav/${questions[key].id}`} >
                                                                    <h5 className="font-weight-bold mt-0 text-dark">
                                                                        {questions[key].sujet}
                                                                        ( Reponse Rav :  {questions[key].nomDuRav} )
                                                                   </h5>
                                                                </Link>
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
                    <Notification handleClose={() => { this.setState({ openNotificationError: false }) }} open={this.state.openNotificationError} message={"Problem d'envoie de la quesion "} variant={"error"} />


                </MDBContainer >

            )
        }
    }

}

function validateEmail(email) {
    // eslint-disable-next-line 
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export {
    MaQuestion
}

export default withFirebase(withStyles(styles)(Question))