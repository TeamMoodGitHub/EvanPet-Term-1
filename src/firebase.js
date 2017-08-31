import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDHkB_aXpmyWSk_C2BD6GBnI56vc6-TtYI",
    authDomain: "progressgg-77267.firebaseapp.com",
    databaseURL: "https://progressgg-77267.firebaseio.com",
    projectId: "progressgg-77267",
    storageBucket: "progressgg-77267.appspot.com",
    messagingSenderId: "339316672262"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database().ref('leaderboard/');
