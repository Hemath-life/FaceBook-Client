import React from "react"
import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftbar/LeftBar"
import Post from "../../components/post/Post"
import RightBar from "../../components/rightbar/RightBar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.scss"

const Profile = () => {
	return (
		<div className=''>
			<Topbar />
			<div className=' d-flex container-fluid'>
				<LeftBar />
				<div className='ProfileContainer  '>
					<div className='profile'>
						<div className='profileTop'>
							<img src='./assets/person/1.jpeg' alt='' />
						</div>
						<div className='profileBottom d-flex flex-column'>
							<img src='./assets/person/2.jpeg' alt='' />
							<h1>Hemath Kumar G</h1>
                                                                      <p>Be Happy All</p>
						</div>
					</div>
					<div className=''>
						<div className='d-flex'>
							<Feed />
							<RightBar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
