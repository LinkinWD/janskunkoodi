import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import KauppaKortti from '../../components/KauppaKortti';
import Otsikko from '../../components/Otsikko';
import styled from '../../styles/kauppa.module.css';

export default function index({ productList }) {
	return (
		<div>
			<Head>
				<title>Verkkokauppa</title>
			</Head>
			<Otsikko otsikko={'Verkkokauppa'} />
			<section className={styled.wrapper}>
				{productList.map((product) => {
					return <KauppaKortti key={product._id} product={product} />;
				})}
			</section>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get(process.env.SERVER_URL + '/api/products');
	return {
		props: {
			productList: res.data
		}
	};
};
