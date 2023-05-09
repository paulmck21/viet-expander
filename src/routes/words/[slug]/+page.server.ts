import { getDefinitions } from '../../../lib/server/helpers.ts/getDefinitions';
import getDerivatives from '../../../lib/server/helpers.ts/getDerivatives';
import { getTones } from '../../../lib/server/helpers.ts/getTones';
import type { PageServerLoad } from './$types';

const nonVN = [
	'ab,ace,act,ad,ae,ann,al,ag,ar,as',
	'bb,br,bl',
	'cc,ck,cl,cr,cs,ct',
	'dr',
	'ed,eg,el,er,es,ex',
	'f',
	'gl,gm,gn,gr',
	'ig,il,ir',
	'j',
	'kn,kr',
	'nc,nd,nk,np,nt,ns',
	'ocu,od,ol,oo,or',
	'pl,pr',
	'rd,rs,rt',
	'sp,st',
	'tb,tc,tt',
	'ub,ul',
	'w',
	'z'
]
	.join(',')
	.split(',');

export const load = (async ({ params }) => {
	let derivatives: string[] = [];
	let definitions: string[][] = [];
	let error = '';
	const nonVNStrsInWord = nonVN.filter((nonVNStr) => params.slug.indexOf(nonVNStr) >= 0);
	if (nonVNStrsInWord.length) {
		error = `This word contains a combination that does not exist in Vietnmaese: ${nonVNStrsInWord.join(
			', '
		)}`;
	} else {
		derivatives = await getDerivatives(params.slug);
		derivatives = getTones(derivatives);
		definitions = await getDefinitions(derivatives);
	}

	return {
		word: {
			original: params.slug,
			derivatives,
			definitions,
			error: error
		}
	};
}) satisfies PageServerLoad;
