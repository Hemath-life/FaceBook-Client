import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftbar/LeftBar"
import RightBar from "../../components/rightbar/RightBar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.scss"
require("dotenv").config()
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Profile = () => {
	console.table("i  am Profile")
	const [user, setUser] = useState([])
	const username = useParams().username

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`http://localhost:8800/api/users?username=${username}`)
			setUser(res.data)
		}
		fetchUser()
	}, [])

	return (
		<div className=''>
			<Topbar />
			<div className=' d-flex container-fluid'>
				<LeftBar />
				<div className='ProfileContainer  '>
					<div className='profile'>
						<div className='profileTop'>
							<img
								src={
									user.coverPicture === ""
										? user.coverPicture
										: PF + "person/noCover.png"
								}
								alt='Cover coverPicture'
							/>
						</div>
						<div className='profileBottom d-flex flex-column'>
							<img
								src={
									user.profilePicture === ""
										? user.profilePicture
										: PF + "person/noAvatar.png"
								}
								alt='Cover coverPicture'
							/>
							<h1>{user.username}</h1>
							<p>{user.desc}</p>
						</div>
					</div>
					<div className=''>
						<div className='d-flex'>
							<Feed username={username} />
							<RightBar profile={user} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
