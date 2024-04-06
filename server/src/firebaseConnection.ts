import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA9XVBL8Mo7flJjEKRei2IoZ_GLGI42My8',
  authDomain: 'blog-website-2251c.firebaseapp.com',
  databaseURL:
    'https://blog-website-2251c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blog-website-2251c',
  storageBucket: 'blog-website-2251c.appspot.com',
  messagingSenderId: '187932429561',
  appId: '1:187932429561:web:a178f5d49a69806c44e628',
};

const firebaseConnection = () => initializeApp(firebaseConfig);

export default firebaseConnection;
