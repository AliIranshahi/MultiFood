import { useLocation } from 'react-router-dom';
import './Search.scss';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  // console.log(name);
  const url = "http://localhost:3000/recipes?q=" + query ;
  const {data , loading ,error } = useFetch(url)
  return (
    <div>
      {/* <h4 className='includes text-center p-3' dir='ltr'>
        Search Result "{query}"
      </h4>
      <div className='result'>
        {error && <p>{error}</p>}
        {loading && <p>loading ...</p>}
        {
          data && <RecipeList recipes={data} />
        }
      </div> */}
    </div>
  )
}
