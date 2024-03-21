import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';
import { RecipeCard } from "./RecipeCard";
import { useState } from "react";
import { send } from 'emailjs-com';

export const Container = () => {
    const [meals, setMeals] = useState({
        sunMeal: "",
        monMeal: "",
        tuesMeal: "",
        wedMeal: "",
        thurMeal: "",
        friMeal: "",
        satMeal: ""
    });

    const [toSend, setToSend] = useState({
        from_name: 'Recipe App',
        to_name: '',
        sunMeal: '',
        monMeal: '',
        tuesMeal: '',
        wedMeal: '',
        thurMeal: '',
        friMeal: '',
        satMeal: '',
        reply_to: '',
      });
  
    const onSubmit = (e) => {
        e.preventDefault();

        send(
            '',
            '',
            toSend,
            '',
        )
        .then((response) => {
            console.log('Success!', response.status, response.text);
            setToSend({
            from_name: 'Recipe App',
            to_name: '',
            sunMeal: '',
            monMeal: '',
            tuesMeal: '',
            wedMeal: '',
            thurMeal: '',
            friMeal: '',
            satMeal: '',
            reply_to: '',
            })
        })
        .catch((err) => {
            console.log('Failed...', err);
        });
    };

    const handleEmailChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value})
    };

    return (
        <>
            <Header/>
            <main className ="">
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <th><b>Days</b></th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                        <tr>
                            <td><b>Name</b></td>
                            <td>Person 1</td>
                            <td>Person 2</td>
                            <td>Person 2</td>
                            <td>Person 1</td>
                            <td>Person 2</td>
                            <td>Person 1</td>
                            <td>Person 1</td>
                        </tr>
                        <tr>
                            <td><b>Meal</b></td>
                            <td>                            
                                <select
                                name="sunMeal" 
                                value={meals.sunMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, sunMeal: e.target.value
                                }); setToSend({...toSend, sunMeal: e.target.value });}}>      
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                            <td>                           
                                <select
                                name="monMeal" 
                                value={meals.monMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, monMeal: e.target.value
                                }); setToSend({...toSend, monMeal: e.target.value });}}>     
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                            <td>                            
                                <select 
                                name="tuesMeal"
                                value={meals.tuesMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, tuesMeal: e.target.value
                                }); setToSend({...toSend, tuesMeal: e.target.value });}}>   
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                            <td>
                                <select 
                                name="wedMeal"
                                value={meals.wedMeal}                          
                                onChange={e => { setMeals({ ...meals, wedMeal: e.target.value }); setToSend({...toSend, wedMeal: e.target.value });}}>   
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                            <td>                            
                                <select 
                                name="thurMeal"
                                value={meals.thurMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, thurMeal: e.target.value
                                }); setToSend({...toSend, thurMeal: e.target.value });}}>   
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                                </td>
                            <td>                            
                                <select 
                                name="friMeal"
                                value={meals.friMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, friMeal: e.target.value
                                }); setToSend({...toSend, friMeal: e.target.value });}}>   
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                            <td>                            
                                <select 
                                name="satMeal"
                                value={meals.satMeal}                          
                                onChange={e => { setMeals({
                                    ...meals, satMeal: e.target.value
                                }); setToSend({...toSend, satMeal: e.target.value });}}>   
                                    {recipeData.map(recipe => {
                                        return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                    })}
                                </select>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <h2>Email{meals.satMeal}|{toSend.satMeal}</h2>
                        <input placeholder="Email" type="text" name="to_name" value={toSend.to_name} onChange={handleEmailChange} required/>
                        <button className="" type="submit">Submit</button>
                    </div>
                </form>
                <div className="grid-container">
                    {recipeData.map(recipe => {
                        return <RecipeCard key={recipe.id} {...recipe} />;
                    })}
                </div>
            </main>
            <Footer/>
        </>
    );
};
