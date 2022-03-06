import { AiFillCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import styled from '../styles/kirjaudu.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function Kirjaudu() {
	const { closeModal } = useGlobalContext();
	const [ username, setUsername ] = useState(null);
	const [ password, setPassword ] = useState(null);
	const [ error, setError ] = useState(false);
	const router = useRouter();

	const handleClick = async () => {
		try {
			await axios.post('http://localhost:3000/api/login', { username, password });
			router.push('/admin');
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<div className={styled.container}>
			<h3>Kirjaudu sisään</h3>
			<AiFillCloseCircle onClick={closeModal} />

			{error && <p>Käyttäjänimi tai salasana on väärä</p>}
			<input
				type="text"
				name="username"
				placeholder="käyttäjänimi"
				id="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br />
			<input
				type="password"
				name="password"
				password="käyttäjänimi"
				placeholder="Salasana"
				id="salasana"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br />
			<button className="generalbtn" onClick={handleClick}>
				Kirjaudu
			</button>
		</div>
	);
}
