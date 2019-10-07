class Notifications {
  constructor(firebase, messaging) {
    this.messaging = messaging;
    this.firebase = firebase;
  }

  push_token = token => {
    return new Promise((resolve, reject) => {
      const db = this.firebase.firestore();
      db.collection("tokens")
        .doc(token)
        .set({
          token: token
        })
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          console.error(`Error al insertar el token en la BD => ${error}`);
          reject(error);
        });
    });
  };

  get_notifications_foreground = () => {
    this.messaging().onMessage(payload => {
      console.log(payload.data.titulo);
    });
  };

  request_permission() {
    return this.messaging.requestPermission().then(() => {
      return this.messaging.getToken();
    });
  }

  on_refresh_token = () => {
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken().then(token => {
        console.log("Se ha renovado el token");
        this.push_token(token);
      });
    });
  };
  registerSW = () => {
    const { messaging } = this;
    return new Promise((resolve, reject) => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("./firebase-messaging-sw.js")
          .then(function(registration) {
            messaging.useServiceWorker(registration);
            console.log("Service Worker registration succeeded:", registration);
            resolve(true);
          })
          .catch(error => {
            console.log("Service Worker registration error:", error.message);
            reject(error);
          });
      } else {
        console.log("Service Worker are not supported.");
      }
    });
  };
  init = () => {
    this.registerSW().then(() => {
      this.request_permission()
        .then(token => {
          this.push_token(token)
            .then(result => {
              this.on_refresh_token();
              this.get_notifications_foreground();
            })
            .catch(error => console.log(error));
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
}
export default Notifications;
