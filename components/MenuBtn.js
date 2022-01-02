import React from 'react';

export default function MenuBtn({ itemclass, tuote }) {
	return <button onClick={() => tuote(itemclass)}>{itemclass}</button>;
}
