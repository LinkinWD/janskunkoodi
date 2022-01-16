import styled from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className={styled.footer}>
			<div className={styled.div}>
				<p>Janskun Lanka ja Ompelupaja</p>
				<div className={styled.imagediv}>
					<Link href="https://www.facebook.com/Janskunlanka">
						<Image src="/images/icons/fb_icon.png" height={40} width={40} />
					</Link>
					<Link href={'https://www.instagram.com/janskunlanka/?hl=fi'}>
						<Image src="/images/icons/insta_icon.png" height={40} width={40} />
					</Link>
				</div>
			</div>
			<div className={styled.div}>
				<p>Kauppakatu 2, 30100 Forssa</p>
				<p>Avoinna ma-pe 9-17, la 9-14</p>
				<Link href={'https://www.contentful.com'}>
					<Image src={'/images/logo/contentful.png'} width={200} height={40} alt="Powered by Contentful" />
				</Link>
			</div>

			<div className={styled.div}>
				<p>janskunompelupaja@gmail.com</p>
				<p>Puhelin: 050 361 5575</p>
			</div>
		</footer>
	);
}
