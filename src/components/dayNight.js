import React from 'react'
import { useThem } from '../hooks/useThem';
import './dayNight.scss';
export default function DayNight() {
    const {changeMode , mode}=useThem();
    const toggleMode = () =>{
        changeMode(mode==="light" ? "dark" : "light")        
    }
  return (
    <div className='body-color'>
        <img src='images/daynight.svg' alt="fga" onClick={toggleMode} style={{filter: mode==='light' ? "invert(100%)":"invert(20%)"}}/>
    </div>
  )
}
