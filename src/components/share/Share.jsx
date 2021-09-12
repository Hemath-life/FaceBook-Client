import "./share.scss"

const Share = () => {
	return (
		<div className='shareContainer border '>
			<div className='shareTop d-flex align-self-center'>
				<img src='assets/person/1.jpeg' alt='' />
				<input className='ms-3 text-capitalize' placeholder="What's your mind justin" />
			</div>
			<hr />
			<div className='shareBottom'>
				<div className='shareOptions'>
					<ul>
						<li>
							<span>Photos or Videos</span>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z' />
								</svg>
							</span>
						</li>

						<li>
							<span>Tag</span>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M6.56 4.438c.585.586.585 1.539.001 2.123-.285.283-.661.439-1.061.439s-.777-.156-1.06-.438c-.585-.586-.586-1.538-.001-2.123.284-.283.661-.439 1.062-.439.4 0 .776.156 1.059.438zm17.44 8.958l-10.609 10.604-13.391-13.391v-10.609h10.605l13.395 13.396zm-16.732-9.665c-.488-.487-1.127-.731-1.767-.731-.641 0-1.28.244-1.769.732-.977.976-.977 2.558 0 3.536.489.488 1.128.732 1.768.732s1.279-.244 1.768-.733c.976-.976.976-2.558 0-3.536z' />
								</svg>
							</span>
						</li>
						<li>
							<span>location</span>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z' />
								</svg>
							</span>
						</li>
						<li>
							<span>Feelings</span>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 13.941c-1.513 1.195-3.174 1.931-5.507 1.931-2.335 0-3.996-.736-5.509-1.931l-.492.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.492-.493zm.492-3.939l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z' />
								</svg>
							</span>
						</li>

						<li>
							<button className='btn   bg-green text-white'>Share</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Share
