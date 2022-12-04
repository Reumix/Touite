import React, {useState} from 'react'


const SearchBar = () => {
    return (<form action='/' method='get'>
        <label htmlFor='header-search'>
            <span className='visually-hidden'>Search blog posts</span>
        </label>
        <input type='text' id='header-search' placeholder='Rechercher un mot' name='s'/>
        <select name='type' id='type-select'>
            <option value=''>Rechercher dans :</option>
            <option value='titre'>Dans le titre</option>
            <option value='body'>Dans l'article</option>
        </select>
        <button type='submit'>Go</button>
    </form>)
}

export default SearchBar;