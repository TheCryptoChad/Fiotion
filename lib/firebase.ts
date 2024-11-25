import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'fiotion.firebaseapp.com',
	projectId: 'fiotion',
	storageBucket: 'fiotion.firebasestorage.app',
	messagingSenderId: '804795183022',
	appId: '1:804795183022:web:6762c470355908a15c223f',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
