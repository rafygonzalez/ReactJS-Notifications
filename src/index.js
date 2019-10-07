import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase, { messaging } from "./config/firebase_config";

import * as sw_cache_app from "./sw_cache_app";
import Notifications from "./utils/messaging";

ReactDOM.render(<App />, document.getElementById("root"));

// Registro del Service Worker para guardar la App entera en la cache
sw_cache_app.register();
// Registro SW para las notificaiones

const Notification = new Notifications(firebase, messaging);
Notification.init();
