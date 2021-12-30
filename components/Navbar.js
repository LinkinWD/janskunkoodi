import { useState, useEffect } from 'react';
import { GiSewingNeedle } from 'react-icons/gi';

import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/navbar.module.css';

export default function Navbar() {
	const [ toggleMenu, setToggleMenu ] = useState(false);
	const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const chanceWidth = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', chanceWidth);

		return () => {
			window.removeEventListener('resize', chanceWidth);
		};
	}, []);

	return (
		<nav className={styled.navbar}>
			<div className={styled.brand}>
				<Image src="/images/logo/logosvg.svg" width={40} height={40} alt="Jantskun lanka" />
				<span>Janskun lanka ja ompelupaja</span>
			</div>
			{(toggleMenu || screenWidth > 1199) && (
				<ul className={styled.navbarlist}>
					<li>
						<Link href="/">
							<a className={styled.navlink}>Etusivu</a>
						</Link>
					</li>
					<li>
						<Link href="/langat">
							<a className={styled.navlink}>Langat</a>
						</Link>
					</li>
					<li>
						<Link href="/muuttuotteet">
							<a className={styled.navlink}>Muut tuotteet</a>
						</Link>
					</li>
					<li>
						<Link href="/ompelupalvelut">
							<a className={styled.navlink}>Ompelupalvelut</a>
						</Link>
					</li>
					<li>
						<Link href="/pesulapalvelut">
							<a className={styled.navlink}>Pesulapalvelut</a>
						</Link>
					</li>
					<li>
						<Link href="/esittely">
							<a className={styled.navlink}>Esittely</a>
						</Link>
					</li>
					<li>
						<Link href="/verkkokauppa">
							<a className={styled.navlink}>Verkkokauppa</a>
						</Link>
					</li>
					<li className={styled.link}>
						<Link href="/otayhteytta">
							<a className={styled.navlink}>Ota yhteyttä</a>
						</Link>
					</li>
				</ul>
			)}

			<button className={styled.btn} onClick={toggleNav}>
				<GiSewingNeedle className={styled.icon} />
			</button>
		</nav>
	);
}
