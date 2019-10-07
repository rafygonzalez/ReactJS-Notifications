/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

const config = {
  apiKey: 'AIzaSyD8nq1lTBsCOENum6BwGD_pDmm_71cg4Pg',
  authDomain: 'vcinos.firebaseapp.com',
  databaseURL: 'https://vcinos.firebaseio.com',
  projectId: 'vcinos',
  storageBucket: 'vcinos.appspot.com',
  messagingSenderId: '182898028792',
  appId: '1:182898028792:web:70cb293be45f6f0f670b0d',
  measurementId: 'G-CTVMH12QZK',
};

const db = !firebase.apps[0] && firebase.initializeApp(config);
const messaging = db.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const tituloNotificacion = '¡Yupii!';
  const opcionesNotificaciones = {
    body: payload.data.titulo,
    icon: 'icons/icon_new_post.png',
    click_action: 'https://vcinos.web.app',
  };
  return self.registration.showNotification(
    tituloNotificacion,
    opcionesNotificaciones,
  );
});
