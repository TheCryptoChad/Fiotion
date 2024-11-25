'use server';

import { auth } from '@clerk/nextjs/server';
import { adminDb } from './firebase-admin';

export async function createNewDocument() {
	auth.protect();

	const { sessionClaims } = await auth();
	const documentCollectionReference = adminDb.collection('documents');
	const documentReference = await documentCollectionReference.add({ title: 'Untitled Document' });

	await adminDb.collection('users').doc(sessionClaims!.email).collection('rooms').doc(documentReference.id).set({
		userId: sessionClaims!.email,
		role: 'owner',
		createdAt: new Date(),
		roomId: documentReference.id,
	});

	return { documentId: documentReference.id };
}
