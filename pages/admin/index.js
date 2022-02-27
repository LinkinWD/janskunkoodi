import Head from 'next/head';
import axios from 'axios';
import Otsikko from '../../components/Otsikko';
import Tilaus from '../../components/Tilaus';
import Link from 'next/link';

import styled from '../../styles/admin.module.css';

export const getServerSideProps = async () => {
	const res = await axios.get(process.env.SERVER_URL + '/api/orders');
	return {
		props: {
			orderList: res.data
		}
	};
};

export default function admin({ orderList }) {
	return (
		<div>
			<Head>
				<title>Admin hallinta</title>
			</Head>
			<Otsikko otsikko={'hallinnointi'} />
			<Link href="/admin/products">
				<button className="generalbtn">Käsittele tuotteita</button>
			</Link>
			<h2>Tilaukset</h2>
			{orderList.map((order) => {
				return <Tilaus key={order._id} order={order} />;
			})}
		</div>
	);
}
