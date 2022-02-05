import React from 'react';
import Verkkokauppakortti from './Verkkokauppakortti';
import styled from '../styles/verkkokauppalista.module.css';

export default function VerkkokauppaLista({ langat }) {
	return (
		<main className={styled.main}>
			{langat.map((lanka) => {
				return <Verkkokauppakortti lanka={lanka} key={lanka._id} />;
			})}
		</main>
	);
}
