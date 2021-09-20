import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftbar/LeftBar"
import RightBar from "../../components/rightbar/RightBar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.scss"
require("dotenv").config()
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Profile = () => {
	return (
		<div className=''>
			<Topbar />
			<div className=' d-flex container-fluid'>
				<LeftBar />
				<div className='ProfileContainer  '>
					<div className='profile'>
						<div className='profileTop'>
							<img src={PF + "person/1.jpeg"} />
						</div>
						<div className='profileBottom d-flex flex-column'>
							<img src={PF + "person/3.jpeg"} />
							<h1>Hemath Kumar G</h1>
							<p>Be Happy All</p>
						</div>
					</div>
					<div className=''>
						<div className='d-flex'>
							<Feed />
							<RightBar profile />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
