import React, { Component } from 'react'
import Question from './Question'

import { MDBContainer, MDBRow, MDBBtn, MDBCol } from 'mdbreact'

class VideoQuestions extends Component {

    state = {
        questions: {},
        answers: [],
        score: 0,
        valid:false
    }

    componentDidMount() {
        this.setState({ questions: this.props.details })
        let length = Object.keys(this.props.details).length

        while (length--) {
            let answers = this.state.answers
            answers.push(0)
            this.setState({ answers })
        }
    }

    setResult = (result, index) => {
        var answers = this.state.answers
        answers[index - 1] = result
        this.setState({ answers })
    }

    afficheScore = () => {
       // console.log(this.state.answers) // j ai un array de 0 meme avec 3 bonne repoonse
        var score = 0;
        for (var i = 0; i < this.state.answers.length; i++) {
            score += this.state.answers[i]
        }

        this.setState({ score, valid:true })

    }


    render() {

        const { questions, score } = this.state

        const AfficheQuestion = Object
            .keys(questions)
            .map(item => (
                    <MDBRow key={item} className="mt-3">
                        <Question
                            details={questions[item]}
                            setResult={this.setResult} //mais dans question meme j ai que des erreur
                            score={score}
                            setScore={this.setScore} 
                            valid = {this.state.valid}/>
                    </MDBRow>        
            ))

        return (
            <MDBContainer className='affichage-question'>
                <MDBRow className="mt-3 ">
                    <h5 className="text-center font-weight-bold text-primary ">Questions</h5>
                </MDBRow>
                {AfficheQuestion}
                <MDBRow className="mt-3">
                    <MDBCol md="6">
                        <MDBBtn color="primary" onClick={this.afficheScore}>Valider</MDBBtn>
                    </MDBCol>
                    <MDBCol md="6">
                        {`resultat  ${score} / ${Object.keys(questions).length}`}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )

    }
}

export default VideoQuestions