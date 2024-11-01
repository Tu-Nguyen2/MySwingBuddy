import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};


import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { provideFirebaseApp } from '@angular/fire/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoPQpQOwEZsCMb4zUfQTW2qOJRUBI7dgg",
  authDomain: "myswingbuddy-36e6a.firebaseapp.com",
  projectId: "myswingbuddy-36e6a",
  storageBucket: "myswingbuddy-36e6a.firebasestorage.app",
  messagingSenderId: "436527817221",
  appId: "1:436527817221:web:7a168b4b70ee95b52f726c",
  measurementId: "G-8W4ZKE7WQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);