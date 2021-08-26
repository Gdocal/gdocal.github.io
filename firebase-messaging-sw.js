importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
   apiKey: "AIzaSyAYmw2WFzZRmiDWoglR-yohkDu873mDOXc",
  authDomain: "test-notitication.firebaseapp.com",
  projectId: "test-notitication",
  storageBucket: "test-notitication.appspot.com",
  messagingSenderId: "532209433002",
  appId: "1:532209433002:web:f1d1f7678d26954b4313d3",
  measurementId: "G-0WSN29YLRH"
});

const messaging = firebase.messaging();
const broadcast = new BroadcastChannel('channel-123');
//messaging.setBackgroundMessageHandler((payload)=>{broadcast.postMessage(payload)})
//messaging.onMessage((payload)=>{broadcast.postMessage(payload)})
