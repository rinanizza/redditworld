import { createStore, combineReducers, applyMiddleware } from 'redux';								
import {thunk} from 'redux-thunk'; // for handling async actionsimport thunk from 'redux-thunk'
import postsReducer from '../reducers/postsReducer';
import commentsReducer from '../reducers/commentsReducer';
import authReducer from '../reducers/authReducer'; 

const rootReducer = combineReducers({
posts: postsReducer,
comments: commentsReducer,
auth: authReducer,
  // Add more reducers if needed

});

 export const store = createStore(rootReducer, applyMiddleware(thunk));











