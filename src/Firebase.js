import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYM_nyW2JYBYQ_dmyj3OB31EXIL9piVEc",
    authDomain: "clone-islem2020.firebaseapp.com",
    databaseURL: "https://clone-islem2020.firebaseio.com",
    projectId: "clone-islem2020",
    storageBucket: "clone-islem2020.appspot.com",
    messagingSenderId: "446492748890",
    appId: "1:446492748890:web:01a0e7bd30d22e5e8a3c63",
    measurementId: "G-GRX5ZVZ77Z"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
