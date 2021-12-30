import styled from '../styles/ctabtn.module.css';
export default function CtaBtn() {
	const trackMouse = (e) => {
		const x = e.pageX - e.target.offsetLeft;
		const y = e.pageY - e.target.offsetTop;
		e.target.style.setProperty('--x', `${x}px`);
		e.target.style.setProperty('--y', `${y}px`);
	};

	return (
		<div className={styled.btncontainer}>
			<button className={styled.btn} onMouseMove={trackMouse}>
				<span>Tutustu palveluihin ja valikoimaamme</span>
			</button>
		</div>
	);
}
