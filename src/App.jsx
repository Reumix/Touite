import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import SearchBar from './component/SearchBar';

import { usePostStore } from './store/postStore';

const filterPosts = (posts, query) => {
	if (!query) {
		return posts
	}

	return posts.filter((post) => {
		const postName = post.name;
		return postName.includes(query);
	});
};

function App() {
	const { posts, setPosts } = usePostStore();

	const { search } = window.location;
	const query = new URLSearchParams(search).get('s');
	const filteredPosts = filterPosts(posts, query);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => setPosts(res));
	}, []);

	return (
		<div className="App">
			<h1><img src='/twitter.png' height="41" width="50"></img>Touité</h1>
			<SearchBar/>
			<ul>
				{filteredPosts.map(post => (<li key={post.id}>{post.name}</li>))}
			</ul>
			<div className="card">
				{posts.length > 0 &&
					posts.map((post) => {
						return (
							<div className="article" key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<p>{post.userId}</p>
								<Link to={`/articles/${post.id}`}>Consulter l'article</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;
