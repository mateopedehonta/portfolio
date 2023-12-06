import { useEffect, useState } from 'react';
import { Proyect } from '../interfaces/Proyect.interfaces';
const url = `${import.meta.env.VITE_YOUR_URL_DATA}/proyects.json`;


export const useData =  () => {
  const [proyects, setProyects] = useState<Proyect[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const getProyects= async()=>{
    const newProyect = await fetch(url).then((res) => res.json());
    setProyects(newProyect)
    setIsLoading(false)
  }
  useEffect(()=>{
    getProyects()
  },[])

  return{
    proyects
    ,isLoading
  }
};
