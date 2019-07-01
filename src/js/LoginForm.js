import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase-config';

class LoginForm extends React.Component {
   constructor(props) {
      super(props);
      this.authorization = this.authorization.bind(this);
   }

   componentDidMount() {

   }

   authorization() {
      let success = this.props.success;
      const login = document.querySelector('#chat-login').value;
      const nickname = document.querySelector('#nickname').value;

      if (/\$|\#|\[|\]|\.|\/|[\x00-\x1F]|\x7F|\|sep\|/i.test(login+nickname) || (login+nickname).indexOf(" ") != -1) {
         console.log('bad data. please try again');
         return;
      } 

      firebase.database().ref('users/' + `${login}|sep|${nickname}`).once('value').then(function (snapshot) {
        if (snapshot.val()) {
         console.log('user exist. hello :)');
        } else {
         console.log('user dont exist. Create');
         firebase.database().ref('users/' + `${login}|sep|${nickname}`).set({
            id: Date.now(),
         });
        }
        success(`${login}|sep|${nickname}`);
      });
   }

   render() {
      return (
         <div className="login-form">
            <h1>Sign in</h1>
            <div className="controls">
               <div className="input">
                  <input type="text" id="chat-login" placeholder="Login"></input>
               </div>
               <div className="input">
                  <input type="text" id="nickname" placeholder="Nickname"></input>
               </div>
               <div className="input">
                  <button onClick={this.authorization}>SEND</button>
               </div>
            </div>
         </div>
      );
   }
}

export default LoginForm;