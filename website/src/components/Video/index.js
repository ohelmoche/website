import React, { Component } from 'react';
import './index.css'

import YTSearch from 'youtube-api-search'

import YoutubePlayer from './YoutubePlayer'
import YoutubeSearch from './YoutubeSearch'
import YoutubeList from './YoutubeList'
import VideoQuestions from './VideoQuestions'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


const questions = {
  video1: {
    videoId:"FhmWFUoTLok",
    questions: {            
      question1: {
        index : 1,
        question:"la question s affiche",
        reponses:{
          reponse1: "premiere proposition",
          reponse2 : "2eme proposition",
          reponse3: "3eme proposition"
        },
        bonneReponse: "premiere proposition",
        comment:"affichage des commentaires"
      },
      question2: {
        index : 2,
        question:"la question 2 s affiche",
        reponses:{
          reponse1: "premiere proposition",
          reponse2: "2eme proposition",
          reponse3: "3eme proposition"
        },
        bonneReponse: "premiere proposition"
      },
      question3: {
        index : 3,
        question:"la question 3  s affiche",
        reponses:{
          reponse1: "1eme proposition",
          reponse2: "2eme proposition",
          reponse3: "3eme proposition"
        },
        bonneReponse: "2eme proposition"
      },

    }
  }
}

class Video extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('torah')
  }

  API_KEY = 'AIzaSyAhxGhAurYi390xceW6wB0dLR2VgRcrib0'

  videoSearch(term) {
    YTSearch({ key: this.API_KEY, term: term, maxResults: 10 }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })

  }


  render() {
    let get = null

    if(this.state.selectedVideo){
      get = Object.keys(questions)
                  .find(obj => this.state.selectedVideo.id.videoId === questions[obj].videoId)

      //console.log(this.state.selectedVideo.id)
    }
    
    //console.log(questions[get])

  let checkVideoQuestions = null
  
  if(get){
    questions[get]  ?  checkVideoQuestions  =  <VideoQuestions  details = {questions[get].questions} /> : checkVideoQuestions = null
  }

    return (
      <MDBContainer>
        <MDBRow className="py-3">
          <YoutubeSearch onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        </MDBRow>
        <MDBRow className="py-3">
          <MDBCol md="6">
            <YoutubePlayer video={this.state.selectedVideo} />
            {checkVideoQuestions}
          </MDBCol>
          <MDBCol md="6">
            <YoutubeList
              onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
              videos={this.state.videos} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}



export default Video;