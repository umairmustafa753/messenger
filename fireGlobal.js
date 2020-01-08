import firebase from 'firebase';
import LinkedList from './linkList';

class FireGlobal {

  constructor(props){
    this.init();
    this.Auth();
  }

  state = {
    messages: new LinkedList(),
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBsJoW9cCN2HuLwBNmy9iE9xCEyyBIK7bg",
        authDomain: "messenger-79496.firebaseapp.com",
        databaseURL: "https://messenger-79496.firebaseio.com",
        projectId: "messenger-79496",
        storageBucket: "messenger-79496.appspot.com",
        messagingSenderId: "614906054978",
        appId: "1:614906054978:web:ecfb26491dd547a195a0db",
        measurementId: "G-KG3L2GNKD6"
      });
    }
  };

  Auth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messagesGroup');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    this.state.messages.add( message );
    return this.state.messages.findById(message._id);
  };

  on = callback => this.ref.on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }


  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  }; 

  delete = message => {
    firebase.database().ref('messagesGroup/' + this.state.messages.removeAt(message._id)).remove();
  }
  

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

FireGlobal.shared = new FireGlobal();
export default FireGlobal;
