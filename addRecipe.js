addRecipe

function addRecipe(event) {
    event.preventDefault();

    let recipeName = document.getElementById("recipeName").value;
    let recipeDesc = document.getElementById("recipeDesc").value;

    if (recipeName && recipeDesc) {
        let recipesDiv = document.querySelector(".recipes-preview");
        let newRecipe = document.createElement("p");
        newRecipe.textContent = "🍲 " + recipeName + " - " + recipeDesc;
        recipesDiv.appendChild(newRecipe);

        alert("Recipe added successfully!");
    } else {
        alert("Please fill all fields!");
    }
}
