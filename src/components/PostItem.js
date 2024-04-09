import React from 'react';


 const PostItem = ({ post }) => {
	return(
	<div>
	<h3>{post.title}</h3>
	<p>{post.content}</p>
	{/* You can include other post information here */}
	</div>
	);
};

export default PostItem






