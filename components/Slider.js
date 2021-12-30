import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
	const [ intervalz, setIntervalz ] = useState(1000); //initial state here represents the interval for first image.

	const onChange = (index, item) => {
		setIntervalz(item.props['data-interval']);
	};
	return (
		<article>
			<div className="karuselli">
				<Carousel
					onChange={onChange}
					autoPlay
					interval={intervalz}
					infiniteLoop={true}
					showThumbs={false}
					stopOnHover={false}
				>
					<div className="image">
						<img src="/images/sliderimages/sliderimage0.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage1.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage2.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage3.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage4.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage5.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage6.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage7.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage8.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/sliderimage9.jpg" alt="kuva" />
					</div>
				</Carousel>
			</div>
			<div className="mobilekaruselli">
				<Carousel
					onChange={onChange}
					autoPlay
					interval={intervalz}
					infiniteLoop={true}
					showThumbs={false}
					stopOnHover={false}
				>
					<div className="image">
						<img src="/images/sliderimages/mobileImage0.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage1.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage2.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage3.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage4.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage5.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage6.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage7.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage8.jpg" alt="kuva" />
					</div>
					<div className="image">
						<img src="/images/sliderimages/mobileImage9.jpg" alt="kuva" />
					</div>
				</Carousel>
			</div>
		</article>
	);
}
