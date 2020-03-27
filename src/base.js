import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnvdm7vxqoQXhWCn8tbMRj7rESIlyd2Fc",
  authDomain: "cotdsampleproject.firebaseapp.com",
  databaseURL: "https://cotdsampleproject.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base