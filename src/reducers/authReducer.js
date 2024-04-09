

const initialState = {
isAuthenticated: false,
user: null,
loading: false,
error: null	
}

 const authReducer  = (state = initialState, action) => {
 switch (action.type) {
case 'LOGIN':
 return {...state, isAuthenticated: true, 
 user: action.payload.user, 
 loading:false,
 error:null
 };
  case 'LOGOUT':
  return{
	  ...state, isAuthenticated: false,
	  user: null, 
	  loading: false, 
	  error: null
  };
  case 'SET_LOADING':
  return{
	  ...state, loading: action.payload.loading
  };
  case 'SET_ERROR':
  return{
	 ...state, error: action.payload.error 
  };
  default:
  return state;
}
 }
 export default authReducer








