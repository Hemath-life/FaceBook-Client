import "./register.scss"

import React from "react"

const Register = () => {
	return (
		<div>
			<div className='registerContainer vh-100 vw-100  d-flex justify-content-center flex-column align-items-center'>
				<div className='w-75 w-md-75  h-100   d-flex flex-column flex-md-row  justify-content-around  align-items-center p-3 p-md-5 '>
					<div className=' w-md-50 w-100'>
						<h3 className='loginLogo'>Facebook</h3>
						<div className='loginDescription text-capitalize'>
							connect with friends and the world around you on Facebook
						</div>
					</div>
					<div className='loginRight d-flex flex-column w-100 w-md-50 bg-white p-4 shadow-sm rounded-3 '>
						<input type='text' placeholder='Username' />
						<input type='Email' placeholder='Email' />
						<input type='password' placeholder='Password' className='mt-4' />
						<input type='password' placeholder='Password Again' className='mt-4' />
						<button className=' text-black  rounded-3 createAccount mt-4' type='submit'>
							Sign In
						</button>

						<button
							type='submit'
							value='Sign Up'
							className='bg-blue p-3 mt-3 text-white text-bold w-50 align-self-center rounded-3'>
							Sing Up
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
