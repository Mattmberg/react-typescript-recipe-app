import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';
import { RecipeCard } from "./ReciperCard";
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

    const handleChangeSunday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeMonday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeTuesday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeWednesday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeThursday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeFriday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    const handleChangeSaturday = () => {
        setMeals({...meals, [e.target.name]:e.target.value });
    };

    return (
        <>
            <Header/>
            <main className ="">
                <table>
                    <tr>
                        <th><b>Days</b></th>
                        <th><input type="checkbox" value="Sunday" onChange={handleChangeSunday}/>Sunday</th>
                        <th><input type="checkbox" value="Monday" onChange={handleChangeMonday}/>Monday</th>
                        <th><input type="checkbox" value="Tuesday" onChange={handleChangeTuesday}/>Tuesday</th>
                        <th><input type="checkbox" value="Wednesday" onChange={handleChangeWednesday}/>Wednesday</th>
                        <th><input type="checkbox" value="Thursday" onChange={handleChangeThursday}/>Thursday</th>
                        <th><input type="checkbox" value="Friday" onChange={handleChangeFriday}/>Friday</th>
                        <th><input type="checkbox" value="Saturday" onChange={handleChangeSaturday}/>Saturday</th>
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
                        <td>{sunMeal}</td>
                        <td>{monMeal}</td>
                        <td>{tuesMeal}</td>
                        <td>{wedMeal}</td>
                        <td>{thurMeal}</td>
                        <td>{friMeal}</td>
                        <td>{satMeal}</td>
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
