import axios from 'axios'
import React, { useEffect, useState } from 'react'

export type Quote={
    id:number,
    author:string,
    quote:string,
}
const Classic = () => {
    
    const [isLoading,setIsLoading]=useState<boolean>(true);
    const [error,SetError]=useState<string | null>(null);
    const [data,setData]=useState<Quote[]>([])
    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://dummyjson.com/quotes")
        .then((res)=>setData(res.data.quotes))
        .catch((err)=>SetError(err.message))
        .finally(()=>setIsLoading(false))
    },[])
    
    if(isLoading) return <p>Yükleniyor...</p>
    if(error) return <p>Bir hata oluştu. {error}</p>
  return (
    <div>
        {data.map((item)=>(
            <p>
                <span>{item.quote}</span>
                <br />
                <b>{item.author}</b>
                <br />
                <br />
            </p>
        ))}
    </div>
  )
}

export default Classic