import React, { useState } from "react";
import './Searchbar.scss';
import { useNavigate } from "react-router-dom";
export default function Searchbar() {
    const [term , setTerm] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/search?q=${term}`);
    }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input id="search" type="search" placeholder="Search ..." onChange={(e)=>setTerm(e.target.value)} required />
    </form>
  );
}
