import { useState } from "react"
import { Users } from "../../dummyData"
import "./post.scss"
require("dotenv").config()
const PF = process.env.REACT_APP_PUBLIC_FOLDER



const Post = ({ post }) => {
	const [like, setLike] = useState(post.like)
	const [isLiked, setIsLiked] = useState(false)

	const likeHandel = () => {
		setLike(isLiked ? like - 1 : like + 1)
		setIsLiked(!isLiked)
	}
	return (
		<div className='postContainer'>
			<div className='postTop d-flex justify-content-between align-items-center'>
				<div className='postTopLeft  d-flex justify-content-between align-items-center'>
					<img
						src={Users.filter(u => u.id === post.userId) [0].profilePicture}
						alt=''
						srcset=''
						className=''
					/>
					<div className='userName ms-2'>
						{Users.filter(u => u.id === post.userId)[0].username}
					</div>
					<div className='postDate ms-2'>{post.date}</div>
				</div>
				<div className='postTopRight'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z' />
						</svg>
					</span>
				</div>
			</div>
			<div className='postCenter'>
				<span>{post?.desc}</span>
				<img src={PF + post.photo} alt='' />
			</div>
			<div className='postBottom d-flex justify-content-between align-items-center'>
				<div className='postBottomLeft d-flex justify-content-between align-items-center'>
					<img className=' ' src='assets/like.png' alt='' onClick={likeHandel} />
					<img className='ms-2' src='assets/heart.png' alt='' />
					<span className='ms-2'>{like} people like it</span>
				</div>
				<div className='postBottomRight'>
					<span>{post.comment}comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
