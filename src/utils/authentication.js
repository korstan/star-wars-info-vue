import firebase from 'firebase';

const UserSignIn = ({ email, password }) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

const UserSignUp = ({ email, password }) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const UserSignOut = () => firebase.auth().signOut();

export { UserSignIn, UserSignUp, UserSignOut };
