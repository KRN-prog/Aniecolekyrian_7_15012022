import SearchBar from "./searchBar.js"
// Créer supprimer des tags
export default class Tags{
    constructor(value, categorie){
        this._value = value,
        this._categorie = categorie
    }

    get create(){
        function createTag(value, categorie){
            const tagsContainer = document.querySelector(".tags");
            const tag = document.createElement("div");
            tag.classList.add("tags__container");
            tag.classList.add("tags__container--"+categorie);
            tagsContainer.appendChild(tag);

            const tagText = document.createElement("span");
            tagText.classList.add("tags__container__text");
            tagText.textContent = value;
            tag.appendChild(tagText);

            const icon = document.createElement("i");
            icon.classList.add("far","fa-times-circle","supprTag");
            tag.appendChild(icon);
        }
        let tagOccurence;
        switch (document.querySelector(".tags__container__text")) {
            case null:
                createTag(this._value, this._categorie);
                break;
        
            default:
                document.querySelectorAll(".tags__container__text").forEach(spec => {
                    if (spec.innerHTML == this._value){
                        tagOccurence = 1;
                    }
                });

                if (tagOccurence == undefined) {
                    createTag(this._value, this._categorie);
                }
                break;
        }

        let tagGroup = [];
        for (let i = 0; i < document.querySelectorAll(".tags__container").length; i++) {
            tagGroup.push(document.querySelectorAll(".tags__container__text")[i].innerHTML);
        }
        const allTags = new SearchBar(tagGroup, recipes);
        allTags.tagsSearch;
    }

    get delete(){
        if (document.querySelector(".supprTag")) {
            let tagGroup = [];
            document.querySelectorAll(".supprTag").forEach(supprTag => {
                tagGroup.push(supprTag.previousSibling.innerHTML);
                supprTag.addEventListener("click",function () {
                    supprTag.parentNode.remove();
                    tagGroup = [];
                    switch (document.querySelectorAll(".supprTag").length) {
                        case 0:
                            tagGroup = [];
                            const allTags = new SearchBar(tagGroup, recipes);
                            allTags.tagsSearch;
                            break;
                    
                        default:
                            document.querySelectorAll(".supprTag").forEach(tagToDelete => {
                                tagGroup.push(tagToDelete.previousSibling.innerHTML);
                                const allTags = new SearchBar(tagGroup, recipes);
                                allTags.tagsSearch;
                            });
                            break;
                    }
                });
            });
        }
    }
}