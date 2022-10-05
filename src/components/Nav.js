import './Nav.css'
import { useEffect,useState } from 'react'
import React from 'react'

function Nav() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    },[])
    console.log(show)
  return (
    <div className={`nav ${show && "black_nav"}`}>
        <img className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'>
        </img>
    </div>
  )
}

export default Nav