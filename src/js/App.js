import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import ChatBoard from './ChatBoard';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isAuth: false };
      this.showChat = this.showChat.bind(this);
   }

   componentDidMount() {

   }

   showChat(user) {
      let userData = user.split('|sep|');
      this.setState({ isAuth: true, login: userData[0], nickname: userData[1] });
   }

   render() {
      return (
         this.state.isAuth ? <ChatBoard userData={{login: this.state.login, nickname: this.state.nickname}} /> : <LoginForm success={this.showChat} />
      );
   }

}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));