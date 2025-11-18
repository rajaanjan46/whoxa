import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Function to set up reCAPTCHA
export const setupRecaptcha = (id: string) => {
  return new RecaptchaVerifier(auth, id, {
    size: "invisible", // or 'normal' if you want a visible widget
    callback: (response: any) => {
      console.log("reCAPTCHA resolved");
    },
  });
};
