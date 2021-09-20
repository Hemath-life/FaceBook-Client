import "./login.scss"

const Login = () => {
	return (
		<div className='loginContainer vh-100 vw-100  d-flex justify-content-center flex-column align-items-center'>
			<div className='w-75 w-md-75  h-100   d-flex flex-column flex-md-row  justify-content-around  align-items-center p-3 p-md-5 '>
				<div className=' w-md-50 w-100'>
					<h3 className='loginLogo'>Facebook</h3>
					<div className='loginDescription text-capitalize'>
						connect with friends and the world around you on Facebook
					</div>
				</div>
				<div className='loginRight d-flex flex-column w-100 w-md-50 bg-white p-4 shadow-sm rounded-3 '>
					<input type='Email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input type='submit' value='Login' className='mt-4' />
					<p className='text-black mt-2 m-0 forgetPassword'>Forget Password ?</p>
					<button className=' text-black  rounded-3 createAccount'>
						Create new account
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
