import './Navbar.scss';
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar';
import { useThem } from '../hooks/useThem';
import { useState } from 'react';
export default function Navbar() {
    // const {color} = useThem();
  return (
    <nav className='Navbar container'>
        <ul className='d-flex gap-5'>
            <li>
                <NavLink to='create'>
                Create Recipe
                </NavLink>
            </li>
            <li className='searchbox'>
                <Searchbar/>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to='/'>
                    Multi Food
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
