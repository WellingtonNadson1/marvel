import axios from "axios"
import md5 from "crypto-js/md5"
import { useState, useEffect } from "react"

export function useFetch<T = unknown>(){

    const [data, setData] = useState<T | null>(null)

    // let timestamp = new Date().getTime()
    // const apkpublic = process.env.PUBLIC_KEY
    // const apkprivate = process.env.PRIVATE_KEY ?? ''
    // const hash = md5(timestamp + apkprivate + apkpublic)
    // console.log(apkpublic)
    // console.log(apkprivate)

    // const baseURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apkpublic}&hash=${hash}&limit=2`

    // console.log(baseURL)


    // useEffect(() => {
    //     axios.get(baseURL)
    //     .then(response => setData(response.data.data))
    //     .catch(error => console.error(error))
    // }, []);
    
    console.log(data)
    return { data }
}