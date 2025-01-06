import './Home.scss';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import { useEffect, useState } from 'react';


import {getDocs , collection} from 'firebase/firestore';
import { db } from '../../firebase/confing';

export default function Home() {

  // const {data , error , Loading} = useFetch("http://localhost:3000/recipes")
  const [data , setData] = useState(null)
  const [error , setError] = useState(null)
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    const ref = collection(db,"recipes");
    setLoading(true)
    getDocs(ref)
    .then((snapshot)=>{
      if(snapshot.empty){
        setError("Error made from empty snapshot")
        setLoading(false)
      }else{
        var result = [];
        snapshot.docs.map(docs=>{
          result.push({id:docs.id , ...docs.data()})        
        })
      }
      setData(result)
      setLoading(false)
    })
  },[])


  return (
    <div className='haricaz'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading...</p>}

      <>
        {
          data && <RecipeList recipes={data}/>
        }
      </>

    </div>
  )
}
