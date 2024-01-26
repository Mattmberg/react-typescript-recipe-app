import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';

export const Container = () => {
    return (
        <>
            <Header/>
            <main className ="">
                <div className="grid-container">
                    {recipeData.map(recipe => {
                        return(
                            <div className="recipe-card" key={recipe.id}>
                                <p>{recipe.name}</p>
                                <p>{recipe.description}</p>
                                {recipe.ingredients.map(ingredient => {
                                    return(<p>{ingredient}</p>);
                                })}
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer/>
        </>
    );
};
