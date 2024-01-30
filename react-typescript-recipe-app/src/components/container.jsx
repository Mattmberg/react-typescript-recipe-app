import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';
import { RecipeCard } from "./ReciperCard";
import { useState } from "react";

export const Container = () => {
    const [sunMeal, setSunMeal] = useState({});
    const [monMeal, setMonMeal] = useState({});
    const [tuesMeal, setTuesMeal] = useState({});
    const [wedMeal, setWedMeal] = useState({});
    const [thurMeal, setThurMeal] = useState({});
    const [friMeal, setFriMeal] = useState({});
    const [satMeal, setSatMeal] = useState({});

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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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
