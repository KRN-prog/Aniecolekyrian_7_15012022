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

        for (let i = 0; i < this._arrToSearch.length; i++) {
            if (this._arrToSearch[i].name.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1) && this._searchValue.length != 0) {
                searchArr.push(this._arrToSearch[i].name);
            }else if(this._arrToSearch[i].appliance.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1) && this._searchValue.length != 0) {
                searchArr.push(this._arrToSearch[i].appliance);
                searchArr = [...new Set(searchArr)];
            }else {
                // Ingrédients
                for (let o = 0; o < this._arrToSearch[i].ingredients.length; o++) {
                    if(this._arrToSearch[i].ingredients[o].ingredient.toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1) && this._searchValue.length != 0) {
                        searchArr.push(this._arrToSearch[i].ingredients[o].ingredient);
                        searchArr = [...new Set(searchArr)];
                    }
                }

                // Ustensils
                for (let o = 0; o < this._arrToSearch[i].ustensils.length; o++) {
                    if(this._arrToSearch[i].ustensils[o].toLowerCase().indexOf(this._searchValue.toLowerCase()) !== -Math.abs(-1) && this._searchValue.length != 0) {
                        searchArr.push(this._arrToSearch[i].ustensils[o]);
                        searchArr = [...new Set(searchArr)];
                    }
                }
            }
        }
        return searchArr;
    }

    // Bar de recherche d'ingrédients
    get ingredientsSearch(){
        let ingredientsArr = [];
        for (let i = 0; i < this._arrToSearch.length; i++) {
            for (let o = 0; o < this._arrToSearch[i].ingredients.length; o++) {
                if(this._arrToSearch[i].ingredients[o].ingredient.toLowerCase().indexOf(ingredientSearch.value) !== -Math.abs(-1) && ingredientSearch.value.length != 0) {
                    ingredientsArr.push(this._arrToSearch[i].ingredients[o].ingredient.toLowerCase());
                    ingredientsArr = [...new Set(ingredientsArr)];
                }else if (ingredientSearch.value.length == 0){
                    ingredientsArr.push(this._arrToSearch[i].ingredients[o].ingredient.toLowerCase());
                    ingredientsArr = [...new Set(ingredientsArr)];
                }
            }
        }
        return ingredientsArr;
    }

    // Bar de recherche d'appareil
    get applianceSearch(){
        let applianceArr = [];
        for (let i = 0; i < this._arrToSearch.length; i++) {
            if(this._arrToSearch[i].appliance.toLowerCase().indexOf(appareilSearch.value) !== -Math.abs(-1) && appareilSearch.value.length != 0) {
                applianceArr.push(this._arrToSearch[i].appliance.toLowerCase());
                applianceArr = [...new Set(applianceArr)];
            }else if (appareilSearch.value.length == 0){
                applianceArr.push(this._arrToSearch[i].appliance.toLowerCase());
                applianceArr = [...new Set(applianceArr)];
            }
        }
        return applianceArr;
    }

    // Bar de recherche d'ustensils
    get ustensilesSearch() {
        let ustensilsArr = [];
        for (let i = 0; i < this._arrToSearch.length; i++) {
            for (let o = 0; o < this._arrToSearch[i].ustensils.length; o++) {
                if(this._arrToSearch[i].ustensils[o].toLowerCase().indexOf(ustensilesSearch.value) !== -Math.abs(-1) && ustensilesSearch.value.length != 0) {
                    ustensilsArr.push(this._arrToSearch[i].ustensils[o].toLowerCase());
                    ustensilsArr = [...new Set(ustensilsArr)];
                }else if (ustensilesSearch.value.length == 0){
                    ustensilsArr.push(this._arrToSearch[i].ustensils[o].toLowerCase());
                    ustensilsArr = [...new Set(ustensilsArr)];
                }
            }
        }
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