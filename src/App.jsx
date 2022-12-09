import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import SearchBar from './component/SearchBar';
import CreateArticle from './component/CreateArticle';

import { usePostStore } from './store/postStore';
import { useCategorieStore } from './store/postCategorie';

const filterPosts = (posts, recherche, query_type, query_categorie) => {
	
	var postsFiltered = undefined;
	var postName = undefined;
	var postCat = undefined;

	if (!recherche && !query_type && !query_categorie) {
		return posts;
	}
	else if (!recherche || !query_type && query_categorie)
	{
		postsFiltered = posts.filter((post) => {
			var postCat = post.idCategorie;
			return postCat == query_categorie;
		})
	}
	else {
		postsFiltered = posts.filter((post) => {
			postCat = post.idCategorie;
			if (query_type == 'titre') { 
				postName = post.titre.toLowerCase(); 
			}
			else { 
				postName = post.description.toLowerCase();
			}

			if (!query_categorie)
			{
				return postName.includes(recherche);
			}
			else
			{
				return postName.includes(recherche) && postCat == query_categorie;
			}
		});
	}
	return postsFiltered;
	};

function App() {
	
	const { search } = window.location;

	const { categorie, setCategorie } = useCategorieStore();
	const { posts, setPosts } = usePostStore();
	
	const recherche = new URLSearchParams(search).get('s');
	const query_type = new URLSearchParams(search).get('type');
	const query_categorie = new URLSearchParams(search).get('categorie');
	const filteredPosts = filterPosts(posts, recherche, query_type, query_categorie);

		
	useEffect(() => {
		fetch('https://127.0.0.1:8000/api/article_apis.json')
			.then((res) => res.json())
			.then((res) => setPosts(res));
	}, []);

	useEffect(() => {
		fetch("https://127.0.0.1:8000/api/categorie_apis.json")
		.then((res_categorie) => res_categorie.json())
		.then((res_categorie) => setCategorie(res_categorie));
	})

	return (
		<div className="App">
			<h1><a href='./'><img src='/twitter.png' height="41" width="50"></img>Touité</a></h1>
			<Link to={'/connexion'}>Connexion</Link>
			<Link to={'/inscription'}>Inscription</Link>
			<SearchBar/>
			<CreateArticle/>
			<p id='infos'></p>
			<div className="card">
				{posts.length > 0 &&
					filteredPosts.map((post) => {
						return (
							<div className="article" key={post.id}>
								<h2>{post.titre}</h2>
								<p>{post.description}</p>
								<p>{post.idCategorie}</p>
								<Link to={`/articles/${post.id}`}>Consulter l'article</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;