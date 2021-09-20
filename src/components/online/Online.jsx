import React from "react"
require("dotenv").config()

const Online = ({ user }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	return (
		<li className='mt-2'>
			<img src={PF + user.profilePicture} alt='' />
			<span className='online'></span>
			<span className='ms-2'>{user.username}</span>
		</li>
	)
}

export default Online
