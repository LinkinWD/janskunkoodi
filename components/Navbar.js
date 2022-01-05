import { useState, useRef } from 'react';
import { GiSewingNeedle } from 'react-icons/gi';

import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/navbar.module.css';

export default function Navbar() {
	const [ toggleMenu, setToggleMenu ] = useState(false);

	return (
		<nav className={styled.navbar}>
			<div className={styled.brand}>
				<div className={styled.logo}>
					<Image src="/images/logo/logosvg.svg" width={40} height={40} alt="Jantskun lanka" />
					<span>Janskun lanka ja ompelupaja</span>
				</div>
				<button className={styled.btn} onClick={() => setToggleMenu(!toggleMenu)}>
					<GiSewingNeedle className={styled.icon} />
				</button>
			</div>
			<div className={`${toggleMenu ? styled.esille : styled.piilossa} ${styled.links}`}>
				<ul className={styled.navbarlist}>
					<li className={styled.li}>
						<Link href="/">
							<a className={styled.a}>Etusivu</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/langat">
							<a className={styled.a}>Langat</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/muuttuotteet">
							<a className={styled.a}>Muut tuotteet</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/ompelupalvelut">
							<a className={styled.a}>Ompelupalvelut</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/pesulapalvelut">
							<a className={styled.a}>Pesulapalvelut</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/esittely">
							<a className={styled.a}>Esittely</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/verkkokauppa">
							<a className={styled.a}>Verkkokauppa</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/otayhteytta">
							<a className={styled.a}>Ota yhteyttä</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
