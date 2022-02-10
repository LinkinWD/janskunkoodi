import { useState } from 'react';
import { GiSewingNeedle } from 'react-icons/gi';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/navbar.module.css';

export default function Navbar() {
	const [ toggleMenu, setToggleMenu ] = useState(false);
	const quantity = useSelector((state) => state.cart.quantity);

	const handleClick = () => {
		setToggleMenu(false);
	};

	return (
		<nav className={styled.navbar}>
			<div className={styled.brand}>
				<div className={styled.logo}>
					<Image src="/images/logo/logosvg.svg" width={40} height={40} alt="Jantskun lanka" />
					<span>Janskun lanka ja ompelupaja</span>
				</div>
				<div className={styled.btnwrapper}>
					<Link href="/cart" passHref>
						<button className={styled.btn}>
							<BsCart4 className={styled.cart} />
							<span className={styled.span}>{quantity}</span>
						</button>
					</Link>
					<button className={styled.btn} onClick={() => setToggleMenu(!toggleMenu)}>
						<GiSewingNeedle className={styled.icon} />
					</button>
				</div>
			</div>
			<div className={`${toggleMenu ? styled.esille : styled.piilossa} ${styled.links}`}>
				<ul className={styled.navbarlist}>
					<li className={styled.li}>
						<Link href="/" passHref>
							<a onClick={handleClick} className={styled.a}>
								Etusivu
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/langat" passHref>
							<a onClick={handleClick} className={styled.a}>
								Langat
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/muuttuotteet" passHref>
							<a onClick={handleClick} className={styled.a}>
								Muut tuotteet
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/ompelupalvelut" passHref>
							<a onClick={handleClick} className={styled.a}>
								Ompelupalvelut
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/pesulapalvelut" passHref>
							<a onClick={handleClick} className={styled.a}>
								Pesulapalvelut
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/esittely" passHref>
							<a onClick={handleClick} className={styled.a}>
								Esittely
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/verkkokauppa" passHref>
							<a onClick={handleClick} className={styled.a}>
								Verkkokauppa
							</a>
						</Link>
					</li>
					<li className={styled.li}>
						<Link href="/otayhteytta" passHref>
							<a onClick={handleClick} className={styled.a}>
								Tule käymään
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
