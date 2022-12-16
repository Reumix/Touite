import React, {useState, useEffect} from 'react'
import { useCategorieStore } from '../store/categorieStore';

const SearchBar = () => {
    
    const { categorie, setCategorie } = useCategorieStore();
    
    useEffect(() => {
		fetch("https://127.0.0.1:8000/api/categories.json")
		.then((res_categorie) => res_categorie.json())
		.then((res_categorie) => setCategorie(res_categorie));
	})

    return (<form action='/' method='get'>
        {/* <label htmlFor='header-search'>
            <span className='visually-hidden'>Search blog posts</span>
        </label> */}
        <input type='text' id='header-search' placeholder='Rechercher un mot' name='s'/>
        <select name='type' id='type-select'>
            <option value=''>Rechercher dans :</option>
            <option value='titre'>Dans le titre</option>
            <option value='body'>Dans l'article</option>
        </select>
        <select name='categorie' id='categorie-select'>
            <option value=''>Catégorie</option>
            {categorie.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.id} - {item.name}</option>
                )
            }, this)};
        </select>
        <button id="right-drop" type='submit'>Go</button>
        {/* <div>
            {categorie.map((item, i) => {
                return (
                    <button key={i} id='categorie'>{item.name}</button>
                )
            })}
        </div> */}
    </form>)
}

export default SearchBar;