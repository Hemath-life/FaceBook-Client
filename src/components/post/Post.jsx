import axios from "axios"
import { useEffect, useState } from "react"
import "./post.scss"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
require("dotenv").config()
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Post = ({ post }) => {
	const [like, setLike] = useState(post.likes.length)
	const [isLiked, setIsLiked] = useState(false)
	const [user, setUser] = useState({})

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
			setUser(res.data)
		}
		fetchUser()
	}, [post.userId])

	const likeHandel = () => {
		setLike(isLiked ? like - 1 : like + 1)
		setIsLiked(!isLiked)
	}
	return (
		<div className='postContainer'>
			<div className='postTop d-flex justify-content-between align-items-center'>
				<div className='postTopLeft  d-flex justify-content-between align-items-center'>
					<Link to={`/profile/${post.userId}`}>
						<img
							src={
								typeof user.profilePicture !== "string"
									? user.profilePicture
									: PF + "person/noAvatar.png"
							}
							alt=''
							srcset=''
							className=''
						/>
					</Link>

					<div className='userName ms-2'>{user.username}</div>
					<div className='postDate ms-2'>{format(post.createdAt)}</div>
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

				<img src={post.img ? post.img : PF + "person/noAvatar.png"} alt='' />
			</div>
			<div className='postBottom d-flex justify-content-between align-items-center'>
				<div className='postBottomLeft d-flex justify-content-between align-items-center'>
					<img className=' ' src={PF + "/like.png"} alt='' onClick={likeHandel} />
					<img className='ms-2' src={PF + "/heart.png"} alt='' />
					<span className='ms-2'>{like} people like it</span>
				</div>
				<div className='postBottomRight'>{/* <span>{post.comment}comments</span> */}</div>
			</div>
		</div>
	)
}

export default Post
