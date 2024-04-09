import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
	const { postId } = useParams();
	return (
	<div>
	<h2>Post Detail</h2>
	<p>Post ID: {PostId}</p>
	<Outlet />
     {/* You can include other post details like comments here */}
	</div>
 );
};
export default PostDetail;




























