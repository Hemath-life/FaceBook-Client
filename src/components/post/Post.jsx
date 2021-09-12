import "./post.scss"

const Post = () => {
	return (
		<div className='postContainer'>
			<div className='postTop d-flex justify-content-between align-items-center'>
				<div className='postTopLeft  d-flex justify-content-between align-items-center'>
					<img src='assets/person/8.jpeg' alt='' srcset='' className='' />
					<div className='userName ms-2'>Justin</div>
					<div className='postDate ms-2'>8 mins ago</div>
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
				<span>my first post</span>
				<img src='assets/post/1.jpeg' alt='' />
			</div>
			<div className='postBottom d-flex justify-content-between align-items-center'>
				<div className='postBottomLeft d-flex justify-content-between align-items-center'>
					<img className=' ' src='assets/like.png' alt='' />
					<img className='ms-2' src='assets/heart.png' alt='' />
					<span className='ms-2'>32 people like it</span>
				</div>
				<div className='postBottomRight'>
					<span>9 comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
