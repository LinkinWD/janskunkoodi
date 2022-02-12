import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/router'
import Image from "next/image";

import React from 'react'

export default function uusituote() {
    const [img, setImg] =useState(null)
    const [title, setTitle] =useState(null)
    const [malf, setMalf] =useState(null)
    const [price, setPrice] =useState(null)
    const [explanation, setExplanation] =useState(null)
    const [currentLine, setCurrentLine] = useState(null)
    const [desc, setDesc] =useState([])
    const [supply, setSupply] =useState([])
    const [lataaKuva, setLataaKuva] = useState(false)
    const [supplyColor, setSupplyColor] = useState(null)
    const [supplyStock, setSupplyStock] = useState(null)
    const [supplyImg, setSupplyImg] = useState(null)

    const poistaKuva =() => {
        setLataaKuva(false)
        setImg('')
    }
    const lisaaRivi = () => {
        setDesc([...desc, currentLine])
        setCurrentLine('')
    }
    const lisaaLanka = () => {
        setSupply([...supply, {color: supplyColor,img: supplyImg, stock: supplyStock}])
    }

  return (
    <div>
        <h2>Lisää uusi tuote</h2>
        <div>
           
            <label htmlFor="">Tuotteen nimi</label>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} />
            <div>
            <label htmlFor="">Liitä kuvan osoite Cloudinarystä</label>
            
            <input type="text" on onChange={(e)=>setImg(e.target.value)} value={img}  />
            <button onClick={()=> setLataaKuva(true)}>Lisää kuva </button>
            <button onClick={poistaKuva}>Poista kuva</button>
            </div>
            <label htmlFor="">Kuvateksti</label>
            <input type="text" onChange={(e) => setExplanation(e.target.value)} />
            <label htmlFor="">Valmistaja</label>
            <input type="text" onChange={(e) => setMalf(e.target.value)}/>
           
            <label htmlFor="">Kappale hinta</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
            <div>
        <h5>Tuoteselostus</h5>
            <label htmlFor="">Lisää rivi kerallaan</label>
            <input type="Tuoteselostus" onChange={(e) => setCurrentLine(e.target.value)} value={currentLine} />
            <button onClick={lisaaRivi}>Lisää rivi</button>
            </div>
            <div>
                <h5>varasto:</h5>
            <label htmlFor="">Langan väri</label>
            <input type="text" onChange={(e) => setSupplyColor(e.target.value)} />
            <label htmlFor="">Langan kuva</label>
            <input type="text" onChange={(e) => setSupplyImg(e.target.value)}/>
            <label htmlFor="">Määrä varastossa</label>
            <input type="number" onChange={(e) => setSupplyStock(e.target.value)} />
            <button onClick={lisaaLanka}>Lisää lanka myyntiin</button>
            </div>
        </div>
        <section>
            <h2>Näytä tuote</h2>
            <h3>{title}</h3>
            {lataaKuva && <Image src={img} height={200} width={200} alt='tuotteen kuva'/>}
            <p>{explanation}</p>
            <p>{malf}</p>
            {price && <p>Hinta: {price}€</p>}
            {desc.length > 0 ? <p>Tuoteselostus</p> : ''}
            {desc.map((line, index) => {
                return <p key={index}>{line}</p>
            })}
            {supply.length > 0 ? <p>Myytävissä olevat langat</p> : ''}
            {supply.map((tuote,index) => {
                return <div key={index}>
                    <p>{tuote.color}</p>
                    {<Image src={tuote.img} height={80} width={80} alt='langan kuva'/>}
                    <p>Määrä varastossa: {tuote.stock}</p>
                </div>
            })}
        </section>
    </div>
  )
}
