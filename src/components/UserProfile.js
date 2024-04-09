import React from 'react';
import { useParams, Outlet } from 'react-router-dom'
 const userProfile = () => {
	const { userId } = useParams();
	// Fetch user profile details based on userId from Redux store or API
	return(
	<div>
	<h2>User Profile</h2>
	<p>User ID: {userId}</p>
	<Outlet />
	{/* Render user profile details */}
	</div>
	);
};
export default UserProfile;






