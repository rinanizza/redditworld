import React from 'react';

const PostList = ({ posts })=>{
	return (
	<div>
	<h2>Posts</h2>
	<ul>
	{posts.map(post =>(
	<li key={post.id}>
	<h3>{post.title}</h3>
	<p>{post.content}</p>
    {/* You can include other post information here */}
	</li>
	))}
	</ul>
	</div>
	)
}
export default PostList;

