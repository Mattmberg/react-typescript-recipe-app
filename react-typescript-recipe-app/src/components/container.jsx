import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';
import { RecipeCard } from "./RecipeCard";
import { useState } from "react";

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

    return (
        <>
            <Header/>
            <main className ="">
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
                            <select value={meals.sunMeal}                          
                            onChange={e => { setMeals({
                                ...meals, sunMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                        <td>                           
                            <select value={meals.monMeal}                          
                            onChange={e => { setMeals({
                                ...meals, monMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                        <td>                            
                            <select value={meals.tuesMeal}                          
                            onChange={e => { setMeals({
                                ...meals, tuesMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                        <td>
                            <select value={meals.wedMeal}                          
                            onChange={e => { setMeals({
                                ...meals, wedMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                        <td>                            
                            <select value={meals.thurMeal}                          
                            onChange={e => { setMeals({
                                ...meals, thurMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                            </td>
                        <td>                            
                            <select value={meals.friMeal}                          
                            onChange={e => { setMeals({
                                ...meals, friMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                        <td>                            
                            <select value={meals.satMeal}                          
                            onChange={e => { setMeals({
                                ...meals, satMeal: e.target.value
                            }); }}>   
                                {recipeData.map(recipe => {
                                    return <option key={recipe.id} value={recipe.name}>{recipe.name}</option>;
                                })}
                            </select>
                        </td>
                    </tr>
                </table>
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
