import Image from 'next/image';
import styled from '../styles/kumppanit.module.css';

export default function KumppanitSlider() {
	const height = 70;
	const width = 170;
	return (
		<div className={styled.slider}>
			<div className={styled.slidertrack}>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani1.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani2.jpeg" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani3.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani4.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani5.jpg" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani6.jpg" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani7.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani8.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani9.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani10.jpg" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani11.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani12.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani13.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani14.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani15.png" alt="kumppanin logo" width={width} height={height} />
				</div>
				<div className={styled.slide}>
					<Image src="/images/kumppanit/kumppani16.png" alt="kumppanin logo" width={width} height={height} />
				</div>
			</div>
		</div>
	);
}
