import Head from 'next/head';
import { useGlobalContext } from '../context';
import { createClient } from 'contentful';
import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';
import Sidebar from '../components/Sidebar';
import styled from '../styles/tuotteet.module.css';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_API
	});
	const res = await client.getEntries({ content_type: 'tuote' });

	return {
		props: {
			tuotteet: res.items
		}
	};
}

export default function muuttuotteet({ tuotteet }) {
	const { openSidebar, isSidebarOpen } = useGlobalContext();
	return (
		<div>
			<Head>
				<title>Muut tuotteet</title>
			</Head>
			<Otsikko otsikko={'Muut tuotteet'} />
			<button onClick={openSidebar}>Järjestele luokkia</button>
			<div className={styled.tuotteetsivu}>
				<div className={`${isSidebarOpen ? styled.auki : styled.kiinni} ${styled.sidebar}`}>
					<Sidebar tuotteet={tuotteet} langat={false} />
				</div>
			</div>
			<div className={styled.tuotteet}>
				{tuotteet.map((tuote) => {
					if (tuote.fields.luokka === false) {
						return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
					}
				})}
			</div>
		</div>
	);
}
