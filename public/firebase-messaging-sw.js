/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
/* CONFIG
const config = {
 
};*/

const db = !firebase.apps[0] && firebase.initializeApp(config);
console.log(firebase.apps);
const messaging = db.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const tituloNotificacion = "¡Yupii!";
  const opcionesNotificaciones = {
    body: payload.data.titulo,
    icon: "icons/icon_new_post.png",
    click_action: "https://vcinos.web.app"
  };
  return self.registration.showNotification(
    tituloNotificacion,
    opcionesNotificaciones
  );
});
