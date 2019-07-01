// Config file
import firebase from 'firebase';

//just free version
const firebaseConfig = {
   apiKey: "AIzaSyD4_rGTuwXu5n6Ao_pmewK7XlWkCyCTfvU",
   authDomain: "v8-chat.firebaseapp.com",
   databaseURL: "https://v8-chat.firebaseio.com",
   projectId: "v8-chat",
   storageBucket: "v8-chat.appspot.com",
   messagingSenderId: "693512348073",
   appId: "1:693512348073:web:e296918dda5521b9"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();