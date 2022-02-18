import CreateArticles from "./classes/createArticles.js";
import SearchBar from "./classes/searchBar.js";
import SearchResult from "./classes/SearchResults.js";
const mainSerchBar = document.querySelector(".searchBar");
mainSerchBar.addEventListener("keyup", function() {
    const searchMain = new SearchBar(mainSerchBar.value, recipes);

    const createResults = new SearchResult(searchMain.mainSearchBar, ".section__container", "resultSearch", "resultSearch__result");
    createResults.delete;
    createResults.create;

    const searchResult = document.querySelectorAll(".resultSearch__result");
    searchResult.forEach(clickedResult => {
        clickedResult.addEventListener("click", function() {
            document.querySelector(".section--articles").innerHTML = "";
            let searchReplace = [];

            recipes.forEach(recipe => {
                if (recipe.name.toLowerCase().indexOf(clickedResult.innerHTML.toLowerCase()) !== -Math.abs(-1) && clickedResult.innerHTML.length != 0) {
                    searchReplace.push(recipe);
                }else if(recipe.appliance.toLowerCase().indexOf(clickedResult.innerHTML.toLowerCase()) !== -Math.abs(-1) && clickedResult.innerHTML.length != 0) {
                    searchReplace.push(recipe);
                }else {
                    // Ingrédients
                    recipe.ingredients.forEach(ingredientRecipe => {
                        if(ingredientRecipe.ingredient.toLowerCase().indexOf(clickedResult.innerHTML.toLowerCase()) !== -Math.abs(-1) && clickedResult.innerHTML.length != 0) {
                            searchReplace.push(recipe);
                        }
                    });
    
                    // Ustensils
                    recipe.ustensils.forEach(ustensilRecipe => {
                        if(ustensilRecipe.toLowerCase().indexOf(clickedResult.innerHTML.toLowerCase()) !== -Math.abs(-1) && clickedResult.innerHTML.length != 0) {
                            searchReplace.push(recipe);
                        }
                    });
                }
            });
            const articleCall = new CreateArticles(searchReplace, "./src/images/grey.jpg");
            articleCall.article;
            document.querySelector("#searchBar").value = clickedResult.innerHTML;
            document.querySelector(".resultSearch").remove();
        });
    });
});

const ingredientSearch = document.querySelector("#ingredientSearch");
ingredientSearch.addEventListener("keyup", function() {
    const ingredientSearch = new SearchBar(document.querySelector("#ingredientSearch").value, recipes);

    const results = new SearchResult(ingredientSearch.ingredientsSearch, ".ingredients-searchSpec", "resultSearch-ingredients", "resultSearch__result");
    results.delete;
    results.createSpecificResult;
});

const appareilSearch = document.querySelector("#appareilSearch");
appareilSearch.addEventListener("keyup", function() {
    const appareilSearch = new SearchBar(document.querySelector("#appareilSearch").value, recipes);

    const results = new SearchResult(appareilSearch.applianceSearch, ".appliance-searchSpec", "resultSearch-appliance", "resultSearch__result");
    results.delete;
    results.createSpecificResult;
});

const ustensilesSearch = document.querySelector("#ustensilesSearch");
ustensilesSearch.addEventListener("keyup", function() {
    const ustensilesSearch = new SearchBar(document.querySelector("#ustensilesSearch").value, recipes);

    const results = new SearchResult(ustensilesSearch.ustensilesSearch, ".ustensils-searchSpec", "resultSearch-ustensils", "resultSearch__result");
    results.delete;
    results.createSpecificResult;
});
for (let i = 0; i < 3; i++) {
    const specInput = document.querySelector(".spec-input-"+i);
    function specificSearchResults__focus__dropDown(){
        if (specInput.nextSibling.nextSibling.classList == "fas fa-chevron-down") {
            specInput.parentNode.parentNode.style.flexBasis = "50%";
            specInput.parentNode.parentNode.style.position = "relative";
            specInput.nextSibling.nextSibling.classList.remove("fa-chevron-down");
            specInput.nextSibling.nextSibling.classList.add("fa-chevron-up");
            specInput.value = "";
            switch (specInput.name) {
                case "ingredientSearch":
                    const specificSearch__a = new SearchBar(recipes, recipes);
                    const createSpecificResults__a = new SearchResult(specificSearch__a.ingredientsSearch, ".ingredients-searchSpec", "resultSearch-ingredients", "resultSearch__result");
                    createSpecificResults__a.createSpecificResult;
                    break;
    
                case "appareilSearch":
                    const specificSearch__b = new SearchBar(recipes, recipes);
                    const createSpecificResults__b = new SearchResult(specificSearch__b.applianceSearch, ".appliance-searchSpec", "resultSearch-appliance", "resultSearch__result");
                    createSpecificResults__b.createSpecificResult;
                    break;
    
                case "ustensilesSearch":
                    const specificSearch__c = new SearchBar(recipes, recipes);
                    const createSpecificResults__c = new SearchResult(specificSearch__c.ustensilesSearch, ".ustensils-searchSpec", "resultSearch-ustensils", "resultSearch__result");
                    createSpecificResults__c.createSpecificResult;
                    break;
            
                default:
                    break;
            }

        }else if (specInput.nextSibling.nextSibling.classList == "fas fa-chevron-up"){
            specInput.parentNode.parentNode.style.flexBasis = null;
            specInput.parentNode.parentNode.style.position = "unset";
            specInput.nextSibling.nextSibling.classList.remove("fa-chevron-up");
            specInput.nextSibling.nextSibling.classList.add("fa-chevron-down");
    
            const deleteResults = new SearchResult(recipes, ".ustensils-searchSpec", "resultSearchBox", "resultSearch__result");
            deleteResults.delete;
            switch (i) {
                case 0:
                    specInput.value = "Ingrédients";
                    break;
                case 1:
                    specInput.value = "Appareil";
                break;
                
                case 2:
                    specInput.value = "Ustensiles";
                break;
            
                default:
                    break;
            }
        }
    }
    specInput.nextSibling.nextSibling.addEventListener("click", function() {
        specificSearchResults__focus__dropDown();
    });
    specInput.addEventListener("focus", function() {
        if (specInput.nextSibling.nextSibling.classList == "fas fa-chevron-down") {
            specInput.parentNode.parentNode.style.flexBasis = "50%";
            specInput.parentNode.parentNode.style.position = "relative";
            specInput.nextSibling.nextSibling.classList.remove("fa-chevron-down");
            specInput.nextSibling.nextSibling.classList.add("fa-chevron-up");
            specInput.value = "";
            switch (specInput.name) {
                case "ingredientSearch":
                    const specificSearch__a = new SearchBar(recipes, recipes);
                    const createSpecificResults__a = new SearchResult(specificSearch__a.ingredientsSearch, ".ingredients-searchSpec", "resultSearch-ingredients", "resultSearch__result");
                    createSpecificResults__a.createSpecificResult;
                    break;
    
                case "appareilSearch":
                    const specificSearch__b = new SearchBar(recipes, recipes);
                    const createSpecificResults__b = new SearchResult(specificSearch__b.applianceSearch, ".appliance-searchSpec", "resultSearch-appliance", "resultSearch__result");
                    createSpecificResults__b.createSpecificResult;
                    break;
    
                case "ustensilesSearch":
                    const specificSearch__c = new SearchBar(recipes, recipes);
                    const createSpecificResults__c = new SearchResult(specificSearch__c.ustensilesSearch, ".ustensils-searchSpec", "resultSearch-ustensils", "resultSearch__result");
                    createSpecificResults__c.createSpecificResult;
                    break;
            
                default:
                    break;
            }

        }
    });
}

const articleCall = new CreateArticles(recipes, "./src/images/grey.jpg");
articleCall.article;