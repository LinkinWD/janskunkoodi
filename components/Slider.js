import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from '../styles/slider.module.css';
import Image from 'next/image';

export default function Slider() {
	const [ intervalz, setIntervalz ] = useState(2000); //initial state here represents the interval for first image.

	const onChange = (index, item) => {
		setIntervalz(item.props['data-interval']);
	};
	return (
		<article>
			<div className={styled.slider}>
				<Carousel
					onChange={onChange}
					autoPlay
					interval={intervalz}
					infiniteLoop={true}
					showThumbs={false}
					stopOnHover={false}
					showArrows={false}
					showStatus={false}
					transitionTime={600}
				>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage0.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage1.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage2.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage3.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage4.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage5.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage6.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage7.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage8.jpg" alt="kuva" width={1250} height={500} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/sliderImage9.jpg" alt="kuva" width={1250} height={500} />
					</div>
				</Carousel>
			</div>
			<div className={styled.mobileslider}>
				<Carousel
					onChange={onChange}
					autoPlay
					interval={intervalz}
					infiniteLoop={true}
					showThumbs={false}
					stopOnHover={false}
					showArrows={false}
					showStatus={false}
					transitionTime={600}
				>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage0.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage1.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage2.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage3.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage4.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage5.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage6.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage7.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage8.jpg" alt="kuva" width={640} height={853} />
					</div>
					<div className="image">
						<Image src="/images/sliderimages/mobileImage9.jpg" alt="kuva" width={640} height={853} />
					</div>
				</Carousel>
			</div>
		</article>
	);
}
