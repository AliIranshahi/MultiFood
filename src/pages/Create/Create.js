import { useEffect, useState } from "react";
import "./Create.scss";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/confing";
export default function Create() {
  const [title, setTitle] = useState("");
  const [material, setMaterial] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  // const {postData , error , loading , data} = useFetch("http://localhost:3000/recipes" , "POST")
  // const [id , setId] = useState(Math.floor(Math.random()*100000000).toString())
  //-------------------------------------------------
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(data){
  //     navigate('/')
  //   }
  // },[data])
  const handleSubmit = async(e) => {
    e.preventDefault();

    const doc = {title,ingredients,method,cookingTime: cookingTime + "minutes"};
    try {
      const ref = collection(db,"recipes");
      console.log(ref);
     await addDoc(ref , doc)
     navigate('/')
    } catch (error) {
      console.log(error.message);
    }
    // postData({title,ingredients,method,cookingTime: cookingTime + "minutes"})
  }
  const handleAdd = (e) => {
    e.preventDefault();
    if (material && !ingredients.includes(material)) {
      setIngredients((prevMaterial) => [...prevMaterial, material]);
      setMaterial('')
    }
  };
  return (
    <div className="add-recipe">
      <h4>Create New Recipe</h4>
      <div className="form-section">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="input-title-food">
            <span>Food Name</span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <label className="label-req">
            <div className="input-ingredients-food">
              <span>Required Material</span>
              <div>
                <input
                  type="text"
                  onChange={(e) => setMaterial(e.target.value)}
                  value={material}
                  
                />
                <button className="add-req" onClick={handleAdd}>
                  Add
                </button>
              </div>
            </div>
            <span dir="ltr" className="list-add ">
          {ingredients.map((i , index) => (
            <em key={i} className="col-12 overflow-complex">{index+1}-{i}</em>
          ))}
          </span>
          </label>
          <div className="input-method-food">
            <span>Method Creation</span>
            <input
              type="text"
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </div>
          <div className="input-time-food">
            <span>CookingTime</span>
            <input
              type="text"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
