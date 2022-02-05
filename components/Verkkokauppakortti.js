import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '../styles/verkkokauppakortti.module.css';

export default function Verkkokauppakortti({ lanka }) {
	return (
		<Link href={`/verkkokauppa/${lanka._id}`} passHref>
			<a className={styled.container}>
				<h4 className={styled.title}>{lanka.title}</h4>
				<div className={styled.wrapper}>
					<Image src={lanka.img} height={180} width={180} alt="kuva" />
				</div>
				<button className={styled.btn}>hinta: {lanka.price}€</button>
			</a>
		</Link>
	);
}
