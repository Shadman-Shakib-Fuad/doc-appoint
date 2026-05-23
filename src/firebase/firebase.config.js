import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:
    "AIzaSyAR8-D8xhXn-FyPqPBDi3-94uliF7WVw4U",

  authDomain:
    "doc-appoint-7663c.firebaseapp.com",

  projectId:
    "doc-appoint-7663c",

  storageBucket:
    "doc-appoint-7663c.firebasestorage.app",

  messagingSenderId:
    "564266801979",

  appId:
    "1:564266801979:web:c0831c369e36b4d101b51e",

  measurementId:
    "G-69EJ4MJK0C",
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export default app;