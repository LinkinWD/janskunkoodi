import React from 'react';
import Image from 'next/image';

export default function WaterMark() {
	return (
		<div>
			<div className="watermark">
				<Image src="/images/logo/logosvg.svg" alt="tausta logo" width={600} height={600} />
			</div>
		</div>
	);
}
