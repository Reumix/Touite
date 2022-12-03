import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import SearchBar from './component/SearchBar';

import { usePostStore } from './store/postStore';

const filterPosts = (posts, recherche, query_type) => {
	if (!recherche || !query_type) {
		return posts;
	}

	const postsFiltered = posts.filter((post) => {
		var postName = undefined;
		if (query_type == 'titre') {
			postName = post.title;
		}
		else {
			postName = post.body;
		}
		return postName.includes(recherche);
	});

	return postsFiltered;
	};

function App() {
	const { posts, setPosts } = usePostStore();
	const { search } = window.location;
	const recherche = new URLSearchParams(search).get('s');
	const query_type = new URLSearchParams(search).get('type');
	const filteredPosts = filterPosts(posts, recherche, query_type);
		
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => setPosts(res));
	}, []);

	return (
		<div className="App">
			<h1><a href='./'><img src='/twitter.png' height="41" width="50"></img>Touité</a></h1>
			<SearchBar/>
			
			<div className="card">
				{posts.length > 0 &&
					filteredPosts.map((post) => {
						return (
							<div className="article" key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<p>{post.id}</p>
								<Link to={`/articles/${post.id}`}>Consulter l'article</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;