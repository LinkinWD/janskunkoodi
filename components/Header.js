import styled from '../styles/header.module.css';
import Hr from './Hr';

export default function Header() {
	return (
		<header className={styled.header}>
			<Hr />
			<h1 className={styled.h1}>Janskun Lanka ja Ompelupaja</h1>
		</header>
	);
}
