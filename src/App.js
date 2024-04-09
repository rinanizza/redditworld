import React from 'react'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import  Header  from './components/Header';
import  PostDetail  from './components/PostDetail';
import UserProfile  from './components/UserProfile';
import  Home  from './components/Home';
import  Root  from "./components/Root";
// App.js


 function App ()  {
 
const router = createBrowserRouter(createRoutesFromElements(
<>
<Route path="/" element={<Root />} />

<Route path="/home" element={<Home />}/>
<Route path="/post/:postId" element={<PostDetail />} />
<Route path="/user/:userId" element={ <UserProfile />} />
</>
));

  return (
    <>
	
	<RouterProvider router={router}/>
	
	</>
  );
};

export default App;
 





