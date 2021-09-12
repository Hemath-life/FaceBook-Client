import React from "react"

const Online = ({ user }) => {
	console.log(user)
	return (
		<ul className='p-0 d-flex  mt-2 flex-column'>
			<li className='mt-2'>
				<img src={user.profilePicture} alt='' />
				<span className='online'></span>
				<span className='ms-2'>{user.username}</span>
			</li>
		</ul>
	)
}

export default Online
