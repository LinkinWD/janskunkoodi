import styled from '../styles/footer.module.css';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className={styled.footer}>
			<div className={styled.div}>
				<p>Janskun Lanka ja Ompelupaja</p>
				<div className={styled.imagediv}>
					<Image src="/images/icons/fb_icon.png" height={40} width={40} />
					<Image src="/images/icons/insta_icon.png" height={40} width={40} />
				</div>
			</div>
			<div className={styled.div}>
				<p>Kauppakatu 2, 30100 Forssa</p>
				<p>Avoinna ma-pe 9-17, la 9-14</p>
			</div>

			<div className={styled.div}>
				<p>janskunompelupaja@gmail.com</p>
				<p>Puhelin: 050 361 5575</p>
			</div>
		</footer>
	);
}
