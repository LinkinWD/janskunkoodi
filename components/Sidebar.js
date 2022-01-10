import { useGlobalContext } from '../context';
import styled from '../styles/sidebar.module.css';

export default function Sidebar() {
	const { isSidebarOpen, closeSidebar, hello } = useGlobalContext();
	console.log(hello);
	return (
		<div className={isSidebarOpen ? styled.auki : styled.kiinni}>
			<div className={styled.sidebar}>
				<p className={styled.otsikko}>{hello}</p>
				<button onClick={closeSidebar}>sulje</button>
			</div>
		</div>
	);
}
