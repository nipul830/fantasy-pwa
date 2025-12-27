import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// 🔥 Firebase config (tumhara)
const firebaseConfig = {
  apiKey: "AIzaSyDFkzjfAZzIvdvKaBD4HBCoZ0EZRtkZjUA",
  authDomain: "fantasy-app-44449.firebaseapp.com",
  projectId: "fantasy-app-44449",
  appId: "1:230270672874:web:8cc9473ae8e253207edc93"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Helpers
const msg = (t) => document.getElementById("msg").innerText = t;

// Signup
window.signup = async () => {
  const email = email.value;
  const password = password.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    msg("Signup successful ✅");
  } catch (e) {
    msg(e.message);
  }
};

// Login
window.login = async () => {
  const email = email.value;
  const password = password.value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    msg("Login successful ✅");
  } catch (e) {
    msg(e.message);
  }
};

// Google Login
window.googleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    msg("Google login successful ✅");
  } catch (e) {
    msg(e.message);
  }
};

// Logout
window.logout = async () => {
  await signOut(auth);
  msg("Logged out");
};
