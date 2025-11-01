// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRXJCUw4WD_DATsjFwVcPNYV8TY2rZCe4",
  authDomain: "yasasferreiraportfolio.firebaseapp.com",
  projectId: "yasasferreiraportfolio",
  storageBucket: "yasasferreiraportfolio.firebasestorage.app",
  messagingSenderId: "714887915369",
  appId: "1:714887915369:web:d99c49ec8ffc39cc1e3ff8",
  measurementId: "G-91QK43D7NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("✅ Firebase initialized successfully!");
export { app, analytics };