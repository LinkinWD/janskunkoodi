import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProvider } from '../context';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</Layout>
		</Provider>
	);
}

export default MyApp;
