import React from "react"

const Online = ({ user }) => {
	console.log(user)
	return (
		
			<li className='mt-2'>
				<img src={user.profilePicture} alt='' />
				<span className='online'></span>
				<span className='ms-2'>{user.username}</span>
			</li>
		
	)
}

export default Online
