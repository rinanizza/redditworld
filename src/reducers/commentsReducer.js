import React from 'react';

const initialState = {
	comments: [],
	loading: false,
	error: null,
}

const commentsReducer = (state = initialState, action) => {
	switch(action.type){
    // Add cases to handle different actions related to posts
	case 'FETCH_POSTS_REQUEST':
	return {...state, isLoading: true};
	case 'FETCH_POSTS_SUCCESS':
	return {...state, isLoading: false, posts: action.payload};
	case 'FETCH_POSTS_FAILURE':
	return {...state, isLoading: false, error: action.payload};
	default: 
	return state;
	}
};

export default commentsReducer;

