import { useEffect } from 'react';
import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';
import { createClient } from 'contentful';
import Head from 'next/head';
import { useGlobalContext } from '../context';
import styled from '../styles/tuotteet.module.css';
import Sidebar from '../components/Sidebar';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_API
	});
	const res = await client.getEntries({ content_type: 'tuote' });

	return {
		props: {
			tuotteet: res.items
		},
		revalidate: 10
	};
}

export default function langat({ tuotteet }) {
	const { openSidebar, isSidebarOpen, setShowProducts, showProducts, closeSidebar } = useGlobalContext();

	useEffect(() => {
		setShowProducts('all');
		closeSidebar();
	}, []);

	return (
		<section>
			<Head>
				<title>Langat</title>
			</Head>
			<Otsikko otsikko={'Langat'} />
			<div className={styled.btncontainer}>
				<button className={styled.btn} onClick={openSidebar}>
					Järjestele luokkia
				</button>
			</div>
			<div className={styled.tuotteetsivu}>
				<div className={`${isSidebarOpen ? styled.auki : styled.kiinni} ${styled.sidebar}`}>
					<Sidebar tuotteet={tuotteet} langat={true} />
				</div>
				<div className={styled.tuotteet}>
					{tuotteet.map((tuote) => {
						if (tuote.fields.luokka === true && showProducts === 'all') {
							return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
						} else {
							if (tuote.fields.alaluokka === showProducts) {
								return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
							}
						}
					})}
				</div>
			</div>
		</section>
	);
}
