import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import YoutubePlayer from './YoutubePlayer'
import YoutubeList from './YoutubeList'
import Commentaires from './Commentaires'
import AddComment from './AddComment'

class mainPage extends Component {

    _isMounted = false;

    state = {
        commentaires: [],
        videos: [],
        mainVideo: { videoId: 'm0RLlB5e1JE' },
        idCat: '',
    }
    getLastVideo() {

    }

    getVideosCategorie() {

    }

    getCommentary() {

    }

    onValid(comment) {
        //TODO afficher qu une fois valider
        console.log(comment)
    }

    componentDidMount = async () => {
        this._isMounted = true;
        window.scrollTo(0, 0);
        const idCat = this.props.match.params.id;

        await this.getLastVideo();
        await this.getVideosCategorie();
        await this.getCommentary();

        this.setState({ idCat })

    }

    render() {
        return (
            <MDBContainer>
                    <MDBCol>
                        <MDBRow>
                            <YoutubePlayer video={this.state.mainVideo} />
                        </MDBRow>
                        <MDBRow>
                            <Commentaires comments = {this.state.commentaires}/>
                        </MDBRow>
                        <MDBRow>
                            <AddComment onValid = {comment => this.onValid(comment)} />
                        </MDBRow>                         
                    </MDBCol>
                    <MDBCol>
                        <YoutubeList videos = {this.state.videos} categorie = {this.state.idCat}/>
                    </MDBCol>
                <MDBRow>
                </MDBRow>
            </MDBContainer>
        )
    }


}


export default mainPage