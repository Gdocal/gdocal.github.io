importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAYmw2WFzZRmiDWoglR-yohkDu873mDOXc",
    authDomain: "test-notitication.firebaseapp.com",
    projectId: "test-notitication",
    storageBucket: "test-notitication.appspot.com",
    messagingSenderId: "532209433002",
    appId: "1:532209433002:web:c56a6d093e04a6cc4313d3",
    measurementId: "G-STZ558KMRW"
});

const messaging = firebase.messaging();