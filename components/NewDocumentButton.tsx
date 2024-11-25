'use client';

import { useTransition } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/lib/actions';

export default function NewDocumentButton() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handleCreateNewDocument = () => {
		startTransition(async () => {
			const { documentId } = await createNewDocument();
			router.push(`/document/${documentId}`);
		});
	};

	return (
		<Button
			disabled={isPending}
			onClick={handleCreateNewDocument}
		>
			{isPending ? 'Creating...' : 'New Document'}
		</Button>
	);
}
