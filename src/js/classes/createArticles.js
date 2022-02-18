import articles from './articles.js';
// Création d'article
export default class CreateArticles{
    constructor(data, image){
        this._data = data,
        this._image = image
    }
    get article() {
        // ===== Version 1: boucles =====
        this._data.forEach(recipes => {
            const articletmpl = document.createElement("article");
            articletmpl.classList.add("article");
            articletmpl.innerHTML = articles;
            articletmpl.querySelector(".recipe_name").innerText = recipes.name;
            articletmpl.querySelector(".duration").innerHTML = `<i class="far fa-clock duration--clock" aria-hidden="true"></i>${recipes.time}min`;
            articletmpl.querySelector(".infoRecipe__more").innerText = recipes.description;

            recipes.ingredients.forEach(recipe => {
                const liIngredients = document.createElement("li");
                switch (recipe.quantity) {
                    case undefined:
                        liIngredients.innerHTML = `<span class="ingredient">${recipe.ingredient}</span>: `;
                        break;
                
                    default:
                        liIngredients.innerHTML = `<span class="ingredient">${recipe.ingredient}</span>: ${recipe.quantity}${recipe.unit}`;
                        break;
                }
                if (recipe.quantity && recipe.unit) {
                    liIngredients.innerHTML = `<span class="ingredient">${recipe.ingredient}</span>: ${recipe.quantity}${recipe.unit}`;
                }else if(recipe.quantity) {
                    liIngredients.innerHTML = `<span class="ingredient">${recipe.ingredient}</span>: ${recipe.quantity}`;
                }else{
                    liIngredients.innerHTML = `<span class="ingredient">${recipe.ingredient}</span>`;
                }
                articletmpl.querySelector(".infoRecipe__ingredients__list").appendChild(liIngredients);
            });
            document.querySelector(".section--articles").appendChild(articletmpl);
        });
    }
}