import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDD5dLOsOejEauDRtahh8zdXEqt8oCxdPo",
  authDomain: "complaintsforum-a1261.firebaseapp.com",
  projectId: "complaintsforum-a1261",
  storageBucket: "complaintsforum-a1261.appspot.com",
  messagingSenderId: "501728545984",
  appId: "1:501728545984:web:584bb70c8126885773f125"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

