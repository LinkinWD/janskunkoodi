import { useGlobalContext } from '../context';
import MaksuJaToimitus from './MaksuJaToimitus';
import Kirjaudu from './Kirjaudu';

export default function Modal() {
	const { whatInModal } = useGlobalContext();
	return (
		<div>
			{whatInModal === 'maksu' && <MaksuJaToimitus />}
			{whatInModal === 'kirjaudu' && <Kirjaudu />}
		</div>
	);
}
