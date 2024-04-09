import React from 'react';
import { Link } from 'react-router-dom';

 const Header = () => {
	 return(
	 <header>
	 <h1>Reddit Clone</h1>
	 {/* Add navigation links here */ }
	 <nav>
	 <ul>
	 <li>
	 <link to="/home">Home</link>
	 </li>
	 <li>
	 <link to="/"></link>
	 </li>
	 </ul>
	 </nav>
	 </header>
	 );
 };
 
 export default Header


