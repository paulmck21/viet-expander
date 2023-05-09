import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		test: await Promise.resolve('New Thing')
	};
}) satisfies PageServerLoad;
