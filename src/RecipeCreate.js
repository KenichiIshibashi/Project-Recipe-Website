import React, { useState } from "react";

function RecipeCreate({createRecipes}) {
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
  const [formData, setFormData] = useState({...initialFormState})
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipes(formData);
    setFormData({...initialFormState});  
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
                <label htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"      
                    onChange={handleChange}
                    value={formData.name}
                    />
                </label>
             </td>         
             <td>
                <label htmlFor="cuisine">
                  <input
                    id="cuisine"
                    type="text"
                    name="cuisine"
                    placeholder="Cuisine"
                    onChange={handleChange}
                    value={formData.cuisine}
                    />
                 </label>
              </td>
              <td>
                  <label htmlFor="photo">
                    <input
                      id="photo"
                      type="url"
                      name="photo"
                      placeholder="URL"
                      onChange={handleChange}
                      value={formData.photo}
                      />
                   </label>
                </td>
                <td>
                    <label htmlFor="ingredients">
                        <textarea
                          id="ingredients"
                          type="text"
                          name="ingredients"
                          placeholder="Ingredients"
                          onChange={handleChange}
                          value={formData.ingredients}
                          />
                      </label>
                   </td>
                   <td>
                      <label htmlFor="preparation">
                          <textarea
                            id="preparation"
                            type="text"
                            textarea name="preparation"
                            placeholder="Preparation"
                            onChange={handleChange}
                            value={formData.preparation}
                            />
                        </label>
                     </td>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
