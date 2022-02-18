import CreateArticles from './CreateArticles.js';
// Filtrer résultats bar de recherche
export default class SearchBar{
    constructor(searchValue, arrToSearch) {
        this._searchValue = searchValue,
        this._arrToSearch = arrToSearch
    }

    // Bar de recherche général
    get mainSearchBar(){
        let searchArr = [];
        
        this._arrToSearch.forEach(recipe => {
            if (recipe.name.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                searchArr.push(recipe.name.toLowerCase());
            }else if(recipe.appliance.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                searchArr.push(recipe.appliance.toLowerCase());
                searchArr = [...new Set(searchArr)];
            }else {
                // Ingrédients
                recipe.ingredients.forEach(ingredientRecipe => {
                    if(ingredientRecipe.ingredient.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                        searchArr.push(ingredientRecipe.ingredient.toLowerCase());
                        searchArr = [...new Set(searchArr)];
                    }
                });

                // Ustensils
                recipe.ustensils.forEach(ustensilRecipe => {
                    if(ustensilRecipe.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                        searchArr.push(ustensilRecipe.toLowerCase());
                        searchArr = [...new Set(searchArr)];
                    }
                });
            }
        });
        return searchArr;
    }

    // Bar de recherche d'ingrédients
    get ingredientsSearch(){
        let ingredientsArr = [];
        this._arrToSearch.forEach(recipe => {
            recipe.ingredients.forEach(ingredientRecipe => {
                if(typeof(this._searchValue) == "string" && ingredientRecipe.ingredient.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                    ingredientsArr.push(ingredientRecipe.ingredient.toLowerCase());
                    ingredientsArr = [...new Set(ingredientsArr)];
                }else if (ingredientSearch.value.length == 0){
                    ingredientsArr.push(ingredientRecipe.ingredient.toLowerCase());
                    ingredientsArr = [...new Set(ingredientsArr)];
                }
            });
        });
        return ingredientsArr;
    }

    // Bar de recherche d'appareil
    get applianceSearch(){
        let applianceArr = [];
        this._arrToSearch.forEach(recipe => {
            if(typeof(this._searchValue) == "string" && recipe.appliance.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                applianceArr.push(recipe.appliance.toLowerCase());
                applianceArr = [...new Set(applianceArr)];
            }else if (appareilSearch.value.length == 0){
                applianceArr.push(recipe.appliance.toLowerCase());
                applianceArr = [...new Set(applianceArr)];
            }
        });
        return applianceArr;
    }

    // Bar de recherche d'ustensils
    get ustensilesSearch() {
        let ustensilsArr = [];
        this._arrToSearch.forEach(recipe => {
            recipe.ustensils.forEach(ustensilsRecipe => {
                if(typeof(this._searchValue) == "string" && ustensilsRecipe.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1)) {
                    ustensilsArr.push(ustensilsRecipe );
                    ustensilsArr = [...new Set(ustensilsArr)];
                }else if (ustensilesSearch.value.length == 0){
                    ustensilsArr.push(ustensilsRecipe.toLowerCase());
                    ustensilsArr = [...new Set(ustensilsArr)];
                }
            });
        });
        return ustensilsArr;
    }

    get tagsSearch() {
        let filteredArr = this._arrToSearch.filter((data) => {
            let ingredients__TagArr = [];
            data.ingredients.forEach(ingredients__Tag => {
                const ingredient__Tag = ingredients__Tag.ingredient.toLowerCase();
                ingredients__TagArr.push(ingredient__Tag);
            });

            let ustensils__TagArr = [];
            data.ustensils.forEach(ustensils__Tag => {
                const ustensil__Tag = ustensils__Tag.toLowerCase();
                ustensils__TagArr.push(ustensil__Tag);
            });
            const tags = [data.id, data.name, data.servings, data.time, data.description, data.appliance.toLowerCase()].concat(ingredients__TagArr, ustensils__TagArr);
            return this._searchValue.every(f => tags.includes(f));
        });
        document.querySelector(".section--articles").innerHTML = "";
        const articleCall = new CreateArticles(filteredArr, "./src/images/grey.jpg");
        articleCall.article;
    }
}