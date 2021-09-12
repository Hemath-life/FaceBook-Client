import { Users } from "../../dummyData"
import "./leftBar.scss"
const LeftBar = () => {
	return (
		<div className=' sideBar'>
			<ul className='feed'>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.29 14.646c0 .748-.607 1.354-1.354 1.354-.749 0-1.356-.606-1.356-1.354 0-.747.607-1.353 1.355-1.353.748.001 1.355.606 1.355 1.353zm-2.71-5.237v2.004c2.521.025 4.567 2.068 4.592 4.587h2.008c-.026-3.629-2.965-6.566-6.6-6.591zm0-1.404c4.407.02 7.98 3.581 7.993 7.995h2.007c-.012-5.513-4.48-9.981-10-10v2.005z' />
						</svg>
					</span>
					<span className=''>Feed</span>
				</li>

				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm0 14h-5v-1h5v1zm5-3h-10v-1h10v1zm0-3h-10v-1h10v1z' />
						</svg>
					</span>
					<span className=''>Chat</span>
				</li>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z' />
						</svg>
					</span>
					<span className=''>Videos</span>
				</li>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M23 18h-5v-1h5v1zm-15.998-10c-2.494 0-4.227 2.383-1.867 6.839.775 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.074-1.59 2.337l.002.615h1.33c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.211-.463.355-1.22-.162-2.197-.953-1.798-1.219-3.374-.713-4.215.547-.909 2.27-.908 2.82.015.935 1.567-.794 3.982-1.021 4.982h1.396c.442-1 1.208-2.208 1.208-3.9 0-2.01-1.312-3.1-2.998-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.422 3.484-.949 6.017-.098.18-.17.351-.232.517h1.463c3.057-5.744.816-9-2.547-9-3.324 0-5.635 3.177-2.488 9.119 1.033 1.952-1.102 2.416-3.395 2.946-1.986.459-2.118 1.429-2.118 3.111l.003.825h1.33c0-2.069-.08-2.367 1.174-2.657 1.918-.442 3.729-.86 4.389-2.305.242-.527.402-1.397-.205-2.543-1.363-2.573-1.705-4.778-.937-6.052z' />
						</svg>
					</span>
					<span className=''>Groups</span>
				</li>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M17 6v13.583l-3-2.634-3 2.634v-13.583h6zm2-2h-10v20l5-4.39 5 4.39v-20zm-2-2h-10v19h1v-18h9v-1zm-2-2h-10v19h1v-18h9v-1z' />
						</svg>
					</span>
					<span className=''>Bookmarks</span>
				</li>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z' />
						</svg>
					</span>
					<span className=''>Questions</span>
				</li>
				<li>
					<span>
						<svg
							width='24'
							height='24'
							xmlns='http://www.w3.org/2000/svg'
							fill-rule='evenodd'
							clip-rule='evenodd'>
							<path d='M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z' />
						</svg>
					</span>
					<span className=''>Jobs</span>
				</li>
				<li>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'>
							<path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z' />
						</svg>
					</span>
					<span className=''>Events</span>
				</li>
				<li>
					<span>
						<svg
							width='24'
							height='24'
							xmlns='http://www.w3.org/2000/svg'
							fill-rule='evenodd'
							clip-rule='evenodd'>
							<path d='M24 17.99l-7.731-.001 2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.95v-1h8.218v-1h3v1h3v-14h-17v.447h-1v-1.447h19v16zm-17.241-9c.649 0 1.293-.213 1.692-.436.755-.42 2.695-1.643 3.485-2.124.215-.13.496-.082.654.114l.009.01c.164.205.145.5-.043.68l-3.371 3.214c-.521.498-.822 1.183-.853 1.902-.095 2.207-.261 6.912-.332 8.834-.016.45-.386.806-.836.806h-.001c-.444 0-.786-.348-.836-.788-.111-.982-.329-3.279-.427-4.212-.04-.384-.279-.613-.584-.614-.304-.002-.523.226-.548.608-.062.921-.266 3.249-.342 4.221-.034.441-.397.785-.84.785h-.001c-.452 0-.823-.356-.842-.809-.097-2.34-.369-8.963-.369-8.963l-1.287 2.331c-.14.254-.445.364-.715.26l-.001-.001c-.228-.088-.371-.305-.371-.54l.022-.157 1.244-4.393c.122-.43.515-.727.963-.727h4.53zm7.241 2h5v-1h-5v1zm0-2h7v-1h-7v1zm-8.626-5c1.241 0 2.25 1.008 2.25 2.25s-1.009 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zm8.626 3h7v-1h-7v1z' />
						</svg>
					</span>
					<span className=''>Course</span>
				</li>
			</ul>

			<button className='btn bl-0 btn-blue text-white'>Show More</button>
			<hr className='' />
			<ul className='friendLists'>
				{Users.map(u => {
					return (
						<li>
							<img src={u.profilePicture} alt='' />
							<span>{u.username}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default LeftBar
