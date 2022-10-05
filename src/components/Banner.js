import React,{useState,useEffect} from 'react'
import url from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {

    const [movies,setMovies]=useState([])

    async function fetchData(){
        const result=await url.get(fetchUrl)
        setMovies(result.data.results[
            Math.floor(Math.random()*result.data.results.length)
        ])
    }
 
 useEffect(()=>{
    fetchData()
},[])
console.log(movies)

function truncate(content,n){
    return content?.length>n?content?.substr(0,n-1)+"...":content
}


  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundSize:"cover"
    }}>
        <div className='banner_content'>
            <h1 className='banner_title'>{movies.name}</h1>
            <h1 className='banner_overview'>
                {truncate(movies.overview,150)}
            </h1>
        </div>
    </header>
  )
}

export default Banner