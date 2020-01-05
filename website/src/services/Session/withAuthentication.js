import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../firebase';

import { connect } from 'react-redux'


const WAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {

          // var addMessage = this.props.firebase.callFunctionFirebase('addMessage')
          // addMessage({ text: 'ssss' }).then(function (result) {
          //   // Read result of the Cloud Function.
          //  console.log(result)
          // });
          if (authUser) {
            this.props.firebase.users().doc(authUser.uid).get()
              .then((doc) => {
                if (doc.exists) {
                  let user = doc.data()
                  this.props.dispatch({ type: 'user', value: user })
                  console.log('level user ' + this.props.user.level + ' ' + this.props.user.email + ' ' + this.props.user.displayName)
                } else {
                  this.props.dispatch({ type: 'user', value: { email: '', username: '', level: 'basic' } })
                  console.log('level user basic')
                }
              }).catch(function (error) {
                console.debug("Error  ", error);
              });
          } else {
            this.props.dispatch({ type: 'user', value: { email: '', username: '', level: 'basic' } })
            console.log('level user basic')
          }
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }



  return withFirebase((connect(mapStateToProps)(WithAuthentication)))

};

export default WAuthentication;