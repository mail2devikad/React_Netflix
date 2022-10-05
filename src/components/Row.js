import React,{useState,useEffect} from 'react'
import url from '../baseUrl'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {

    const [movies,setMovies]=useState([])

    async function fetchData(){
        const result=await url.get(fetchUrl)
        setMovies(result.data.results)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='posters'>
            {
                movies.map((movie)=>(
                    <img key={movie.name} className='poster' src={`${base_url}${movie.backdrop_path}`} alt={movie.name}></img>
                ))
            }
        </div>
    </div>
  )
}

export default Row