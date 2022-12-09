import { useState, useEffect} from "react";
import { useCategorieStore } from "../store/postCategorie";

const CreateArticle = () => {
    
    const [titreArticle, setTitreArticle] = useState('');
    const [descriptionArticle, setDescriptionArticle] = useState('');
    const [categorieSelected, setCategorieSelected] = useState('');

    const { categorie, setCategorie } = useCategorieStore();
    
    useEffect(() => {
		fetch("https://127.0.0.1:8000/api/categorie_apis.json")
		.then((res_categorie) => res_categorie.json())
		.then((res_categorie) => setCategorie(res_categorie));
	})

    function submitArticle() {

        const requestOptions = {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ 
                titre: titreArticle,
                description: descriptionArticle,
                idAdministrateur: 0,
                //idCategorie: categorieSelected
                idCategorie: 1
         })
        };
    
        fetch('https://127.0.0.1:8000/api/article_apis.json', requestOptions)
            .then(response => response.json())
    }

    return (
        <form onSubmit={submitArticle}>
            <h4>{titreArticle} {descriptionArticle} {categorieSelected}</h4>
            <input type="text" id="newArticleTitle" placeholder="Titre de votre article" value={titreArticle} onChange={(event) => setTitreArticle(event.target.value)}/>
            <input type="text" id="newArticleDescription" placeholder="Corps de votre article" value={descriptionArticle} onChange={(event) => setDescriptionArticle(event.target.value)}/>
            {/* <select id='categorie-select' value={categorieSelected} onChange={(event) => setCategorieSelected(event.target.value)}>
                <option value=''>Catégorie</option>
                {categorie.map((item, i) => {
                    return (
                        <option key={i} value={item.id}>{item.id} - {item.name}</option>
                    )
                })};
            </select> */}
            <button type="submit">Go</button>
        </form>
    )
}

export default CreateArticle;