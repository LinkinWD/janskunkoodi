import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import( '../components/Navbar'),{ ssr:false})

import Header from '../components/Header';
import Footer from '../components/Footer';
import WaterMark from './WaterMark';


export default function Layout({children}) {
	return ( <>
        <Navbar/>   
        <div className="container">
        <Header/>
        <section>
            <WaterMark/>
            {children}
            </section>   
        </div>  
        <Footer/>
    </>)
}
