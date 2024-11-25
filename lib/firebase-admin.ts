import { App, cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const serviceKey = require('@/service-key.json');

let adminApp: App;

if (getApps().length === 0) {
	adminApp = initializeApp({
		credential: cert(serviceKey),
	});
} else {
	adminApp = getApp();
}

const adminDb = getFirestore(adminApp);

export { adminApp, adminDb };
