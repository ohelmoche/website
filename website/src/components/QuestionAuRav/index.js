import React, { Component } from 'react';

import FormQuestionAuRav from './FormQuestionAuRav'

import { MDBContainer, MDBCardHeader, MDBMedia, MDBRow, MDBCol, MDBNavLink, MDBIcon ,MDBTable } from "mdbreact";
import MaQuestion from './Question'


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'

import Questions from './Questions'

class Question extends Component {

    state = {
        loading: false,
        username: '',
        email: '',
        question: '',
        questions: Questions,
        isPrivate: false,
        categorieSelected: 'ten',
        sujet: '',
        search: ''
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }


    getData = () => {
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addQuestion = () => {
        let { questions, username, email, question, isPrivate, sujet } = this.state
        questions.push(
            {
                nomDeLaPerson: username,
                email: email,
                nomDuRav: 'rav cohen',
                isPrivate: isPrivate,
                question: question,
                sujet
            })
        this.setState({ questions })
    }

    onChangeIsprivate = (isPrivate) => {
        this.setState({
            isPrivate: !isPrivate
        })
    }

    handleChangeCategorie = event => {
        console.log(event.target.value);
        this.setState({ categorieSelected: event.target.value })
    };


    render() {

        const { questions, username, email, question, search, isPrivate } = this.state
        const { classes } = this.props
        return (
            <MDBContainer style={{ paddingTop: 5 }}>
                <MDBRow className="">
                    <MDBCol md="6">
                        <FormQuestionAuRav onChange={this.onChange} username={username} email={email} question={question} onSubmit={this.addQuestion}
                            isPrivate={isPrivate} onChangeIsprivate={this.onChangeIsprivate} />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBContainer>
                            <MDBCardHeader className="font-weight-bold d-flex justify-content-between text-dark bg-white">
                                <p className="mr-4 mb-0">Questions</p>
                            </MDBCardHeader>

                            <form className="mt-4">

                                <div className="input-group input-group-md px-2 mb-2">
                                    <FormControl variant="filled" className={classes.formControl} style={{ marginLeft: 5 ,marginBottom:2 }}>
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
                                    <FormControl variant="filled" className={classes.formControl} style={{ marginLeft: 5 ,marginBottom:2}}>
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
                                    <FormControl variant="filled" className={classes.formControl} style={{ marginLeft: 5 ,marginBottom:2}}>
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

                                <div className="input-group input-group-md px-2 mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text white grey-text" id="basic-addon9">
                                            <MDBIcon icon="search" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                                        value={search} onChange={this.onChange} name='search' placeholder="rechercher une question"
                                        aria-describedby="basic-addon9" />
                                </div>
                            </form>

                            <MDBTable scrollY maxHeight="350px">
                                {
                                    Object.keys(questions)
                                        .map(key =>
                                            <MDBMedia
                                                key={key}
                                                className="d-block d-md-flex mt-4">
                                                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                                                    alt="" />
                                                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                                                    <MDBNavLink exact to={`/question-au-rav/${key}`} >
                                                        <h5 className="font-weight-bold mt-0">
                                                            {questions[key].nomDeLaPerson}
                                                            ( Reponse Rav :  {questions[key].nomDuRav} )
                                            </h5>
                                                    </MDBNavLink>
                                                    {questions[key].question}
                                                </MDBMedia>
                                            </MDBMedia>
                                        )
                                }
                            </MDBTable>

                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }

}





export {
    MaQuestion
}

export default withStyles(styles)(Question);