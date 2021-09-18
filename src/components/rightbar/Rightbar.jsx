import { Users } from "../../dummyData"
import Online from "../online/Online"

import "./rightbar.scss"

const RightBar = () => {
	return (
		<div className='rightBar p-3'>
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
		</div>
	)
}

export default RightBar
