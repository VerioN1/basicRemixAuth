import type {FC, ReactElement} from 'react';
import React from 'react';
import Navbar from '~/components/Navbar/Navbar';

type props = {
	children: ReactElement | ReactElement[]
}
const Index : FC<props> = ({children}) => {
	return (
		<div>
			<Navbar/>
			{children}
		</div>
	);
};

export default Index;
