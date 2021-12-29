import styled from '../styles/otsikko.module.css';

export default function Otsikko({ otsikko }) {
	return <h2 className={styled.otsikko}>{otsikko}</h2>;
}
