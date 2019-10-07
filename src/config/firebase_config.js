// eslint-disable-next-line import/no-extraneous-dependencies
import { firebase } from "@firebase/app";
import "firebase/messaging";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD8nq1lTBsCOENum6BwGD_pDmm_71cg4Pg",
  authDomain: "vcinos.firebaseapp.com",
  databaseURL: "https://vcinos.firebaseio.com",
  projectId: "vcinos",
  storageBucket: "vcinos.appspot.com",
  messagingSenderId: "182898028792",
  appId: "1:182898028792:web:70cb293be45f6f0f670b0d",
  measurementId: "G-CTVMH12QZK"
};


const db = !firebase.apps[0] && firebase.initializeApp(config);
console.log(firebase.apps);
export const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BExBuDbg5NOFMQww56CXcyXgpaLCOv6yAgyK7nOA0HFLbgWFgcmWc0VOZC08K-4Y4n9W91GokessM4MqdWd0jcU"
);
export default db;
