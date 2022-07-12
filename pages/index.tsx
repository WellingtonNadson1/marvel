import Link from "next/link"
import { useFetch } from "../hooks/useFetch"
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';

type Hero = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}


export default function Index(){

const {data, isFetching} = useFetch<Hero[]>('characters')

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <Navbar />

      {/* Body content */}
        
      <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              
            <div className="">
              <ul className="flex">
                {isFetching && <p>Carregando...</p>}
                <div  className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
                {data?.map(hero => {
                    const src = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
                  return (
                    <li key={hero.id} className="flex flex-col items-center justify-center p-1 text-center hover:bg-blue-400 rounded">
                      <Image 
                      loader={() => src}
                      src={src} 
                      alt={hero.name}
                      width={100}
                      height={150} />
                      
                      <strong>{hero.name}</strong>
                    </li>
                      )
                    })}
                </div>
              </ul>
        </div>

            </div>
            {/* /End replace */}
          </div>
      </main>

    </>
  )
}