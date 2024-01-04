import React from 'react'
import { useParams } from 'react-router-dom'
import {useState} from 'react'
import { Link } from 'react-router-dom';
let vId="";

const RecipeInfo = () => {
    const [item,setItem]=useState();
    const {MealId}=useParams();
    if(MealId!=="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data.meals[0])
            console.log(data.meals[0])
        })
    }
    if(item){
      const url = item.strYoutube;
      const str=url.split("=");
       vId=str[str.length-1];
    }
  return (
    <>
       {
        (!item)?"" : (
            <>
               <div className='content row'>
                 <div className='col-md-6 alignimg'><img src={item.strMealThumb} className="img-fluid rounded-circle recipeimg mt-5" alt='recipeimg'/></div>
                 <div className='col-md-6 innercontentalign'>
                    <div className='inner-content mt-4'>
                      <h1>{item.strMeal}</h1>
                      <h2>{item.strArea} Food</h2>
                      <h3>Category {item.strCategory}</h3>
                    </div> 
                 </div>
              </div>
              <div className='recipe-details row'>
                <div className='ingredients col mt-5'>
                    <h3 className='text-danger headinginfo'>Ingredients</h3><br/>
                    <h5>{item.strIngredient1}:{item.strMeasure1}</h5>
                    <h5>{item.strIngredient2}:{item.strMeasure2}</h5>
                    <h5>{item.strIngredient3}:{item.strMeasure3}</h5>
                    <h5>{item.strIngredient4}:{item.strMeasure4}</h5>
                    <h5>{item.strIngredient5}:{item.strMeasure5}</h5>
                    <h5>{item.strIngredient6}:{item.strMeasure6}</h5>
                    <h5>{item.strIngredient7}:{item.strMeasure7}</h5>
                    <h5>{item.strIngredient8}:{item.strMeasure8}</h5>
                    <h5>{item.strIngredient9}:{item.strMeasure9}</h5>
                </div>
                <div className='instructions col mt-5'>
                  <div className='headingalign'><h3 className='text-danger headinginfo'>Instructions</h3></div><br/>
                  <h5 className='instructionpara'>{item.strInstructions}</h5>
                </div>
                <div className='video'>
                  <iframe src={`https://www.youtube.com/embed/${vId}`} title='Recipe video'></iframe>
                </div>
               <div className='btnalign'><Link to="/"><button className='gobackbtn text-danger'>Go back</button></Link></div>
              </div>
            </>
        )
       }      
    </>
  )
}

export default RecipeInfo