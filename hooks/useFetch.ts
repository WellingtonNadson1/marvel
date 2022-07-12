import axios from "axios"
import MD5 from "crypto-js/md5"
import { useState, useEffect } from "react"

export function useFetch<T = unknown>(urlEspecific: string){

    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
 
    useEffect(() => {
      let timestamp = new Date().getTime()
      const apkpublic = process.env.NEXT_PUBLIC_PUBLIC_KEY
      const apkprivate = process.env.NEXT_PUBLIC_PRIVATE_KEY
      const hash = MD5(timestamp + apkprivate + apkpublic)
      const baseURL = `https://gateway.marvel.com:443/v1/public/${urlEspecific}?ts=${timestamp}&apikey=${apkpublic}&hash=${hash}&limit=20`
  
      axios.get(baseURL).then(response => setData(response.data.data.results))
      .catch(erro => console.error(erro))
      .finally(() => {
        setIsFetching(false)
      })
  
    }, [urlEspecific]);
    
    console.log(data)
    return { data, isFetching }
}