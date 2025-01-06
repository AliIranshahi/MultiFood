import React from 'react'
import './RecipeList.scss';
import { Link } from 'react-router-dom';
import { useThem } from '../hooks/useThem';
export default function RecipeList({recipes}) {
  const {mode} = useThem();
  return (
    <div className='recipeList row container-fluid'>
    {
        recipes.map((data)=>(
            <div key={data.id} className={`sl-reciplist col-12 col-sm-3 col-md-3 ${mode}`}>
              <h3 className='title'>
                {
                  data.title
                }
              </h3>
              <p className='time' dir='ltr'>
                {
                    data.cookingTime + " " 
                }
                to make
              </p>
              <p className='about' dir='ltr'>
                {
                    data.method.substring(0,80)
                }
                ...
              </p>
              <Link className='buttonn' to={`recipe/${data.id}`}>
              <span>
                Cook This
              </span>
              </Link>
            </div>
          ))
    }
    </div>
  )
}
