import { AiFillCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import styled from '../styles/kirjaudu.module.css';

export default function Kirjaudu() {
	const { closeModal } = useGlobalContext();
	return (
		<div className={styled.container}>
			<h3>Kirjaudu sisään</h3>
			<AiFillCloseCircle onClick={closeModal} />
			<form action="">
				<label htmlFor="username">Käytäjänimi</label>
				<input type="text" name="username" id="username" />
				<label htmlFor="password">Salasana</label>
				<input type="password" name="salasana" id="salasana" />
			</form>
		</div>
	);
}
