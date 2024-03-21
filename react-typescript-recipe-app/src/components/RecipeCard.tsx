import { RecipeCardType } from "../types";

export const RecipeCard = ({ id, name, description, ingredients, cookTemp}: RecipeCardType) => {
    return (
        <div className ="recipe-card">
            <div className="recipe-card-body">
                <div className="recipe-name"><label className=""><b><u>{name}</u></b></label></div>
                <p className="recipe-description">
                    {description}
                </p>
                <p>Cook at: {cookTemp}</p>
                <p className="ingredient-box">
                {ingredients.map(ingredient => {
                    return(<p>{ingredient}</p>);
                })}
                </p>
            </div>
        </div>
    );
};
