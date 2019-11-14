import React, { Component } from 'react'
import { MDBIcon } from "mdbreact";


class YoutubeSearch extends Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {

        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(event.target.value);
        //console.log(this.state.term)
    }

    render() {
        return (
            <div className="input-group input-group-md px-2 mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text white grey-text" id="basic-addon9">
                    <MDBIcon icon="search" />
                    </span>
                </div>
                <input type="text" className="form-control mt-0 black-border rgba-white-strong"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder='recherche une video'
                    aria-describedby="basic-addon9" />
            </div>
        )
    }
}

export default YoutubeSearch