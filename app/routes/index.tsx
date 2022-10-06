import type {LoaderFunction} from '@remix-run/node';
import {Link} from '@remix-run/react';
import Modal from '~/components/Modal/Modal';
import Layout from '~/layout';
import {requireUserToken} from '~/session.server';


export const loader: LoaderFunction = async ({request}) => {
	await requireUserToken(request);
	return null;
};

export default function Index() {

	return (
		<Layout>
			<div className="flex h-full">
				<p>
					hello
				</p>
			</div>
		</Layout>
	);
}
