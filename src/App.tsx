import React from 'react';
import './App.css';
import BlogCreater from './Pages/BlogCreater';
import BlogDetails from './Pages/BlogDetails';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Blogs from './Pages/Blogs';
function App() {
	return (
		<Main>
			<Routes>
				<Route path='/' element = {<BlogCreater /> }/>
				<Route path='/blogs' element ={<Blogs/>} />
				<Route path='/:id' element ={<BlogDetails />}/>
			</Routes>
		</Main>
	);
}

export default App;
