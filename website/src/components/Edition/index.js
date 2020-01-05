
import React from 'react';

import {
    MDBCol,
    MDBCardBody,
    MDBCard,
    MDBCardTitle,
    MDBNavLink,
    MDBContainer,
    MDBCardHeader
} from "mdbreact";

import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'

import QuestionAuRavEdition from './Question'
import CommentaireEdition from './Commentaire'


import { connect } from 'react-redux'


class Edition extends React.Component {


    state = {
        level: ""
    }

    componentDidMount = () => {
        this.setState({
            level: this.props.user.level
        })
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

    render() {
        const { level } = this.state
        const { classes } = this.props

        if ( level === 'manager' || level === 'devloper' ) {
            return (
                <MDBContainer>
                    <MDBCardHeader className="font-weight-bold d-flex justify-content-center text-dark bg-white mb-5">
                        <h3 className=" d-flex align-items-center"> Edition</h3>
                    </MDBCardHeader>
                    <MDBContainer>
                        <CardMenu style={classes.bodyCardMenu} link={"/edition/question"} title={"Question"} />
                        <CardMenu style={classes.bodyCardMenu} link={"/edition/commentaire"} title={"Commentaire"} />
                    </MDBContainer>
                </MDBContainer>
            )
        } else {
            return (
                <h1 className="text-center" >Check authorization...</h1>
            )
        }
    }
}


const CardMenu = ({ style, link, title }) => (
    <MDBCol md="12" className="p-1 m-0 "  >
        <MDBNavLink
            to={link}
            className="p-0 m-0"
        >
            <MDBCard cascade className=" grey lighten-4 p-0 m-0 "  >
                <MDBCardBody cascade className={style} >
                    <MDBCardTitle style={{ margin: 0 }}>
                        {title}
                    </MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
        </MDBNavLink>
    </MDBCol>
)

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


// export default (withStyles(styles)(Edition))

export default (connect(mapStateToProps)((withStyles(styles)(Edition))))



export {
    QuestionAuRavEdition , 
    CommentaireEdition
}