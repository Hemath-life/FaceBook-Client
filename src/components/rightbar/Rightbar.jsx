import { Users } from "../../dummyData"
import Online from "../online/Online"

import "./rightbar.scss"
require("dotenv").config()
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const HomeRightBar = () => {
	return (
		<>
			<div className='birthdayContainer d-flex justify-content-center align-items-center'>
				<img src='assets/gift.png' alt='' />
				<span className='text-capitalize ms-2 '>
					<b>polo poster</b> and <b>3 other friends</b> have birthday today
				</span>
			</div>
			<div className='rightBarAd'>
				<img src='assets/ad.png ' alt='' />
				<div className='onlineFriends'>
					<span>
						<b>Online Friends</b>
					</span>
					<ul className='p-0 d-flex  mt-2 flex-column'>
						{Users.map(u => (
							<Online key={u.id} user={u} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
const ProfileRightBar = () => {
	return (
		<>
			<div className='profileRightBar'>
				<h2 className='profileRightBarTitle'>User Information </h2>
				<ui className='text-capitalize'>
					<li className='text-capitalize'>
						<span className='key'>City:</span>
						<span className='value'>Chennai</span>
					</li>
				</ui>
				<ui>
					<li className='text-capitalize'>
						<span className='key'>From:</span>
						<span className='value'>Tamil nadu</span>
					</li>
				</ui>
				<ui>
					<li className='text-capitalize'>
						<span className='key'>Relationship:</span>
						<span className='value'>single</span>
					</li>
				</ui>
				<ui>
					<li className='text-capitalize'>
						<span className='key'></span>
						<span className='value'></span>
					</li>
				</ui>
				<h2 className='profileRightBarTitle'>User Friends </h2>
				<ul className='user-friends'>
					<li>
						<img src={PF + "person/6.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
					<li>
						<img src={PF + "person/6.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
					<li>
						<img src={PF + "person/1.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
					<li>
						<img src={PF + "person/2.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
					<li>
						<img src={PF + "person/3.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
					<li>
						<img src={PF + "person/4.jpeg"} alt='' />
						<span>Justin Hem</span>
					</li>
				</ul>
			</div>
		</>
	)
}

const RightBar = ({ profile }) => {
	console.log(profile)
	return (
		<div className={"rightBar p-3 w-" + (profile ? 50 : 100)}>
			{profile ? <ProfileRightBar /> : <HomeRightBar />}
		</div>
	)
}

export default RightBar
