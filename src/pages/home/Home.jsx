import Topbar from "./../../components/topbar/Topbar"
import LeftBar from "../../components/leftbar/LeftBar"
import RightBar from "../../components/rightbar/RightBar"
import Feed from "../../components/feed/Feed"
const Home = () => {
	return (
		<>
			<Topbar />

			<div className=' d-flex w-100 container-fluid homeBarList'>
				<LeftBar />
				<Feed />
				<RightBar />
			</div>
		</>
	)
}

export default Home
