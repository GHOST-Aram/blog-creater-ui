import React from 'react';
import './App.css';
import BlogCreater from './Pages/BlogCreater';
import BlogDetails from './Pages/BlogDetails';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Blogs from './Pages/Blogs';
import BlogUpdater from './Pages/BlogUpdater';

function App() {
	return (
		<Main>
			<Routes>
				<Route path='/' element = {<BlogCreater /> }/>
				<Route path='/blogs'>
					<Route path='/blogs/' element ={<Blogs/>} />
					<Route path='/blogs/:id' element ={<BlogDetails />}/>
					<Route path='/blogs/:id/edit' element={<BlogUpdater />}/>
				</Route>
			</Routes>
		</Main>
	);
}

export default App;
