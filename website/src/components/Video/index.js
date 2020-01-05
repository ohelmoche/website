import React, { Component } from 'react';
import './index.css'

import YTSearch from 'youtube-api-search'
import { MDBRow, MDBContainer } from 'mdbreact';
import VideoCard from './VideoHome';



class Video extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      categories:[],
      number:3,
    }
    this.getCategorie()
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
  getCategorie(){
    //todo recevoir les categorie par firebase
    //this.setState({categorie})
    let categories = this.state.categories;
    categories.push({
      name:'halacha',
      image:''
    });
    this.setState({categories})
    

  }

  getNumberOfPlentyLine = (number) => {
    return Math.floor(this.state.categories.length / number);
  }

  getNumberElementLastLine = (number) => {
    return this.state.categories.length % number;
  }

  separateCategoriesForAffichage = (number) =>{  
    //je cree une liste qui contient des liste de categorie allant jussqu a 3 element par liste
    let lists = [];
    let i = 0 ,j = 0, k = 0;
    for(i = 0; i < this.getNumberOfPlentyLine(number);++i)
    {
      
      lists[i] = [];
      for(j = i * 3; j < this.state.categories.length; ++j)
      {
        lists[i].push(this.state.categories[j]);
      }
    }

    //last line
    lists[i] = [];
    for(k = 0;k < this.getNumberElementLastLine(number);++k)
    {
      lists[i].push(this.state.categories[k + j]);
    }
    
    return lists;
  }
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    let i = 0, j = 0;
    const {categories} = this.state;
    
    let afficheAllCategories = categories && this.separateCategoriesForAffichage(this.state.number)//separe pour avoir des ligne de 3 categorie // sa renvoie quoi !!! une liste de liste [[cat1,cat2,cat3],[cat4,cat5,cat6]....]
                .map(list => (
                  <MDBRow key = {i++}>
                    {list.map(categorie => (
                      <VideoCard icon={"video"} key = {j} image = {categorie.image} scrollToTop={this.scrollToTop} link={`/video/${categorie.name}`} title={`${categorie.name}`} description={"Ready-to-use components that you can use in your"}/>
                    ))}
                  </MDBRow>
                )); //dac

                //console.log(afficheAllCategories.length)
    /* old version
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
      */
    
    return(
      <MDBContainer>
        {afficheAllCategories}
      </MDBContainer>
    )
  }

}



export default Video;