import React from 'react';

export default function MenuBtn({ alaluokka, tuote }) {
	return <button onClick={() => tuote(alaluokka)}>{alaluokka}</button>;
}
