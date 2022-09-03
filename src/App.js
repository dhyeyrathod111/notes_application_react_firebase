import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import config from 'react-global-configuration';
import Homepage from './pages/Homepage';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login'
import Registration from './pages/Registration'
import { fetchUserActionCreater } from './actions/index'
import CreateNotes from './pages/CreateNotes'
import ViewNotes from './pages/ViewNotes'
import EditNotes from "./pages/EditNotes";
import { useDispatch } from 'react-redux'

function App() {
	const dispactch = useDispatch();
	dispactch(fetchUserActionCreater(localStorage.getItem('userid')))
	return (
		<section>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/profile" element={<UserProfile />} />
					<Route exact path="/homepage" element={<Homepage />} />
					<Route exact path="/registration" element={<Registration />} />
					<Route exact path="/create_note" element={<CreateNotes />} />
					<Route exact path="/view_notes" element={<ViewNotes />} />
					<Route exact path="/edit_notes/:noteid" element={<EditNotes />} />
				</Routes>
			</BrowserRouter>
		</section>
	);
}

export default App;
