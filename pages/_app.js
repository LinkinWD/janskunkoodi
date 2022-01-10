import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProvider } from '../context';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</Layout>
	);
}

export default MyApp;
