import { useContext, useRef } from "react"
import "./login.scss"
import loginCall from "./../../apiCall"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
	const email = useRef()
	const password = useRef()
	const { user, isFetching, error, dispatch } = useContext(AuthContext)

	const handleSubmit = async e => {
		e.preventDefault()
		let em = email.current.value
		let pass = password.current.value
		loginCall({ email: em, password: pass }, dispatch)
		console.log(user)
	}
	return (
		<div className='loginContainer vh-100 vw-100  d-flex justify-content-center flex-column align-items-center'>
			<div className='w-75 w-md-75  h-100   d-flex flex-column flex-md-row  justify-content-around  align-items-center p-3 p-md-5 '>
				<div className=' w-md-50 w-100'>
					<h3 className='loginLogo'>Facebook</h3>
					<div className='loginDescription text-capitalize'>
						connect with friends and the world around you on Facebook
					</div>
				</div>
				<form
					className='loginRight d-flex flex-column w-100 w-md-50 bg-white p-4 shadow-sm rounded-3 '
					onSubmit={handleSubmit}>
					<input type='Email' placeholder='Email' ref={email} required />
					<input
						type='password'
						minLength='1'
						placeholder='Password'
						ref={password}
						required
					/>
					<input
						type='submit'
						value={isFetching ? "loading" : "Log In"}
						className='mt-4'
						disabled={isFetching}
					/>
					<p className='text-black mt-2 m-0 forgetPassword'>Forget Password ?</p>
					<button className=' text-black  rounded-3 createAccount ' disabled={isFetching}>
						Create new account
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
