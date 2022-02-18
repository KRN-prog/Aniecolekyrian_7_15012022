import articles from './articles.js';
// Création d'article
export default class CreateArticles{
    constructor(data, image){
        this._data = data,
        this._image = image
    }
    get article() {
        for (let i = 0; i < this._data.length; i++) {
            const articletmpl = document.createElement("article");
            articletmpl.classList.add("article");
            articletmpl.innerHTML = articles;
            articletmpl.querySelector(".recipe_name").innerText = this._data[i].name;
            articletmpl.querySelector(".duration").innerHTML = `<i class="far fa-clock duration--clock" aria-hidden="true"></i>${this._data[i].time}min`;
            articletmpl.querySelector(".infoRecipe__more").innerText = this._data[i].description;

            for (let o = 0; o < this._data[i].ingredients.length; o++) {
                const liIngredients = document.createElement("li");
                switch (this._data[i].ingredients[o].quantity) {
                    case undefined:
                        liIngredients.innerHTML = `<span class="ingredient">${this._data[i].ingredients[o].ingredient}</span>: `;
                        break;
                
                    default:
                        liIngredients.innerHTML = `<span class="ingredient">${this._data[i].ingredients[o].ingredient}</span>: ${this._data[i].ingredients[o].quantity}${this._data[i].ingredients[o].unit}`;
                        break;
                }
                if (this._data[i].ingredients[o].quantity && this._data[i].ingredients[o].unit) {
                    liIngredients.innerHTML = `<span class="ingredient">${this._data[i].ingredients[o].ingredient}</span>: ${this._data[i].ingredients[o].quantity}${this._data[i].ingredients[o].unit}`;
                }else if(this._data[i].ingredients[o].quantity) {
                    liIngredients.innerHTML = `<span class="ingredient">${this._data[i].ingredients[o].ingredient}</span>: ${this._data[i].ingredients[o].quantity}`;
                }else{
                    liIngredients.innerHTML = `<span class="ingredient">${this._data[i].ingredients[o].ingredient}</span>`;
                }
                articletmpl.querySelector(".infoRecipe__ingredients__list").appendChild(liIngredients);
            }
            document.querySelector(".section--articles").appendChild(articletmpl);
        }
    }
}