
import './App.css';
import Meal from './Components/Meal';
import RecipeInfo from './Components/RecipeInfo';
import './Components/style.css';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={ <Meal/>}/>
         <Route path='/:MealId' element={<RecipeInfo />}/>
      </Routes>
     
    </>
  );
}

export default App;
