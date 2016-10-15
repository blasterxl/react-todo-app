import firebase from 'firebase';

try {
  const config = {
      apiKey: "AIzaSyB_8oJduBzRUbSGWvVO8hKCiwMc5XUP7Jo",
      authDomain: "react-todo-app-e8b28.firebaseapp.com",
      databaseURL: "https://react-todo-app-e8b28.firebaseio.com",
      storageBucket: "react-todo-app-e8b28.appspot.com",
      messagingSenderId: "725638053776"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export const firebaseRef = firebase.database().ref();

export default firebase;
