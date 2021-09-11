import "./topbar.scss"

const Topbar = () => {
	return (
		<nav class='navbar navbar-light bg-blue navbar-expand-md'>
			<div class='container-fluid d-flex justify-content-between align-items-center '>
				{/* brand title */}

				<div class='  text-white w-25 d-flex align-items-center  '>
					<div class=' w-10  '>
						<img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
					</div>
					<h5 className=' mb-0 mx-2 '>FaceBook</h5>
				</div>

				{/* nav list */}
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<path d='M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z' />
					</svg>
				</button>

				<div class='collapse navbar-collapse ' id='navbarNav'>
					<ul class='navbar-nav w-100 d-flex justify-content-between align-items-md-center'>
						<li className='nav-link w-75 mx-md-3'>
							{/* search bar */}

							<div className='d-flex bg-white rounded-pill '>
								<span className='searchIcon '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path d='M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z' />
									</svg>
								</span>
								<input
									class='form-control me-2 searchBar  rounded-pill'
									type='search'
									placeholder='Search friend, Feed and Post'
									aria-label='Search'
								/>
							</div>
						</li>
						<li class='nav-item mt-1 mt-md-0 w-10 mx-md-2 '>
							<a class='nav-link active text-white p-0'>Home</a>
						</li>
						<li class='nav-item mt-1 mt-md-0 w-10 mx-md-2'>
							<a class='nav-link active text-white p-0'>Timeline</a>
						</li>

						<div className='w-10 d-flex justify-content-between align-items-md-center mt-3 mt-md-0'>
							<li class='nav-item topbarIconItem mx-2'>
								<svg
									width='24'
									height='24'
									xmlns='http://www.w3.org/2000/svg'
									fill-rule='evenodd'
									clip-rule='evenodd'>
									<path d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z' />
								</svg>
								<span className='topbarIconBadge'>1</span>
							</li>

							<li class='nav-item topbarIconItem mx-2'>
								<svg
									width='24'
									height='24'
									xmlns='http://www.w3.org/2000/svg'
									fill-rule='evenodd'
									clip-rule='evenodd'>
									<path d='M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z' />
								</svg>
								<span className='topbarIconBadge'>1</span>
							</li>

							<li class='nav-item topbarIconItem mx-2'>
								<img
									style={{
										width: "30px",
										height: "30px"
									}}
									src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-message-chat-flatart-icons-outline-flatarticons-5.png'
								/>
								<span className='topbarIconBadge'>1</span>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Topbar
