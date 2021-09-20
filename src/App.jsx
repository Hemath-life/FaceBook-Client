import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import "./App.scss"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Router, Route, Switch, BrowserRouter } from "react-router-dom"

export default function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home} />
			<Route path='/profile/:username' exact component={Profile} />
			<Route path='/login' exact component={Login} />
			<Route path='/register' exact component={Register} />
		</BrowserRouter>
	)
}
