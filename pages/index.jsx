import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
// import { useFetch } from '../hooks/useFetch'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MD5 } from 'crypto-js'
import Image from 'next/image'


export default function Home() {

  const [data, setData] = useState([])
 
  useEffect(() => {
    let timestamp = new Date().getTime()
    const apkpublic = 'cd7f66310dcd0451d755e01a17d0f3f3'
    const apkprivate = '0b0e5d9b137c4208171c39125f7859a800aaa0ab'
    const hash = MD5(timestamp + apkprivate + apkpublic)
    const baseURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apkpublic}&hash=${hash}&limit=20`

    axios.get(baseURL).then(response => setData(response.data.data.results))
    .catch(erro => console.error(erro))

  }, []);

  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <Navbar />
        <div>
          <ul>
            {data.map(hero => {
      const src = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
              return (
                <li key={hero.id}>
                  <Image 
                  loader={() => src}
                  src={src} 
                  alt=""
                  width={100}
                  height={150} />
                  
                  <strong>{hero.name}</strong>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}
