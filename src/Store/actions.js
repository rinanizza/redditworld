import React from 'react';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

 export const fetchPosts = () => {
	return async (dispatch) => {
	dispatch({ type: FETCH_POSTS_REQUEST });
try{
	const response = await fetch('https://www.reddit.com/r/all.json');
	const data = await response.json();
	dispatch({ type: FETCH_POSTS_SUCCESS, payload:data });
   }catch (error){
	   dispatch({ type: FETCH_POSTS_FAILURE, error: error.message });
   }	
 };
};
