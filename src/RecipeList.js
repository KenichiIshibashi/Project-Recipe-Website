import React from "react";
import RecipeData from "./RecipeData";

function RecipeList({recipes, deleteRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      {console.log(RecipeData)}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipeitem, index) => (
            <tr>
              <td>{recipeitem.name}</td>
              <td>{recipeitem.cuisine}</td>
              <td>
                <img src={recipeitem.photo}/></td>
              <td>{recipeitem.ingredients}</td>
              <td>{recipeitem.preparation}</td>
              <td></td>
              <td><button name="delete" onClick={()=>deleteRecipes(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
