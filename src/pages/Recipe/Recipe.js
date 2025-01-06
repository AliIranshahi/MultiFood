import { useParams } from "react-router-dom";
import "./Recipe.scss";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

import { db } from "../../firebase/confing";
import {collection, doc, getDoc} from "firebase/firestore";

export default function Recipe() {
  const { id } = useParams();
  // const url = "http://localhost:3000/recipes/" + id;
  const [recipe , setRecipe] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);


  useEffect(()=>{
    const ref = doc(db,"recipes",id);
    setLoading(true)
    getDoc(ref)
    .then((doc)=>{
      if(doc.empty){
        setError("page is not loading")
        setLoading(false)
      }else{
        setRecipe({...doc.data()})
      }
      setLoading(false)
    })

  },[])
  return (
    <div className="recipe-window container-fluid">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      <div className="recipe-content" dir="ltr">
        {recipe && (
          <>
            <h4>{recipe.title}</h4>
            <p className="timeCooking"> 
              <span>
                Time Cook :
                {
                  recipe.cookingTime
                }
              </span>
            </p>
            <p className="ingerdients">
              <span>
                {
                  recipe.ingredients
                }
              </span>
            </p>
            <p className="method">
              {
                recipe.method
              }
            </p>
          </>
        )}
      </div>
    </div>
  );
}
