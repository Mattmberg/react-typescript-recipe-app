import { Footer } from "./footer";
import { Header } from "./header";
import { recipeData } from "../data";
import '../App.css';
import { RecipeCard } from "./ReciperCard";

export const Container = () => {
    return (
        <>
            <Header/>
            <main className ="">
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
