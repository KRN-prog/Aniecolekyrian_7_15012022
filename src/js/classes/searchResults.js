import Tags from "./tags.js";
// Création résultat bar de recherche
export default class SearchResult{
    constructor(arrayResultsSearchBar, whereToCreateResultsContainer, resultsContainer, resultsBox){
        this._arrayResultsSearchBar = arrayResultsSearchBar,
        this._whereToCreateResultsContainer = whereToCreateResultsContainer,
        this._resultsContainer = resultsContainer,
        this._resultsBox = resultsBox
    }
    /* Création bar de recherche générale */
    get create() {
        const resultSearchContainer = document.createElement("div");
        resultSearchContainer.classList.add(this._resultsContainer);

        const searchResultCreateBox = document.querySelector(this._whereToCreateResultsContainer);
        searchResultCreateBox.parentNode.insertBefore(resultSearchContainer, searchResultCreateBox.nextSibling);
        for (let i = 0; i < this._arrayResultsSearchBar.length; i++) {
            const resultSearch = document.createElement("div");
            resultSearch.classList.add(this._resultsBox);
            resultSearch.textContent = this._arrayResultsSearchBar[i];
            resultSearchContainer.appendChild(resultSearch);
        }
    }

    /* Création bar de recherche spécifique (ingrédient, appareil, ustensils) */
    get createSpecificResult() {
        const resultSearchContainer = document.createElement("div");
        resultSearchContainer.classList.add(this._resultsContainer);
        const container = document.querySelector(this._whereToCreateResultsContainer);
        container.appendChild(resultSearchContainer);


        const resultSearchBox = document.createElement("div");
        resultSearchBox.classList.add("resultSearchBox");
        const searchBox = document.querySelector(`.${this._resultsContainer}`);+
        searchBox.appendChild(resultSearchBox);

        this._arrayResultsSearchBar.forEach(result => {
            const resultSearch = document.createElement("div");
            resultSearch.classList.add("specifieSearch__recommendation");
            resultSearch.innerHTML = result;
            resultSearchBox.appendChild(resultSearch);

            resultSearch.addEventListener("click", function(){
                let tagCategorie;
                switch (resultSearch.parentNode.parentNode.classList.value) {
                    case "resultSearch-ingredients":
                        tagCategorie = "ingredients";
                        break;

                    case "resultSearch-appliance":
                        tagCategorie = "appliance";
                        break;

                    case "resultSearch-ustensils":
                        tagCategorie = "ustensils";
                        break;
                
                    default:
                        break;
                }
                const creatTag = new Tags(resultSearch.innerHTML, tagCategorie);
                creatTag.create;
                creatTag.delete;
            });
        });
    }

    get delete() {
        const mainResultBox = document.querySelector("."+this._resultsContainer);
        switch (mainResultBox) {
            case null:
                break;
        
            default:
                if (mainResultBox.classList.value == "resultSearch") {
                    mainResultBox.remove();
                }else if(mainResultBox.classList.value == "resultSearch-ingredients" || mainResultBox.classList.value == "resultSearch-appliance" || mainResultBox.classList.value == "resultSearch-ustensils"){
                    mainResultBox.remove();
                }

                if (mainResultBox.parentNode != null) {
                    mainResultBox.parentNode.remove();   
                }
                break;
        }
    }
}