import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useContext } from "react"
import "./App.scss"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, BrowserRouter, Redirect } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

export default function App() {
	const { user } = useContext(AuthContext)

	return (
		<BrowserRouter>
			<Route path='/' exact>
				{user ? <Home /> : <Redirect to='/login' />}
			</Route>
			<Route path='/profile/:username' exact>
				<Profile />
			</Route>
			<Route path='/login' exact>
				{user ? <Redirect to='/' /> : <Login />}
			</Route>
			<Route path='/register' exact>
				{user ? <Redirect to='/' /> : <Register />}
			</Route>
		</BrowserRouter>
	)
}
