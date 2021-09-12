import "./feed.scss"
import Share from "../share/Share"
import Post from "../post/Post"
const Feed = () => {
	return (
		<div className='feedContainer'>
			<Share></Share>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
		</div>
	)
}

export default Feed
