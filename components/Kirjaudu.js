import { AiFillCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';

export default function Kirjaudu() {
	const { closeModal } = useGlobalContext();
	return (
		<div>
			<h3>Kirjaudu sisään</h3>
			<AiFillCloseCircle onClick={closeModal} />
			<form action="">
				<label for="username">Käytäjänimi</label>
				<input type="text" name="username" id="username" />
				<label for="password">Salasana</label>
				<input type="password" name="salasana" id="salasana" />
			</form>
		</div>
	);
}
