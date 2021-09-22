import "./feed.scss"
import Share from "../share/Share"
import Post from "../post/Post"
import { Posts } from "../../dummyData"
import { useEffect, useState } from "react"
import axios from "axios"

const Feed = ({ username }) => {
	const [posts, setPost] = useState([])
	useEffect(() => {
		const fetchPost = async () => {
			const res = username
				? await axios.get(`http://localhost:8800/api/post/profile/${username}`)
				: await axios.get(
						"http://localhost:8800/api/post/timeline/61487e712c7f41235c6eab40"
				  )
			setPost(res.data)
		}
		fetchPost()
	}, [username])

	return (
		<div className='feedContainer p-3'>
			<Share></Share>
			{posts.map(p => {
				return <Post key={p._id} post={p} />
			})}
		</div>
	)
}

export default Feed
