import React from 'react';

const Navbar = () => {
	return (
		<header className="bg-gray-900">
			<div
				className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8"
			>
				<a className="block text-teal-300" href="/">
					<span className="sr-only">Home</span>
					Varcode
				</a>

				<div className="flex items-center justify-end flex-1 md:justify-between">
					<nav className="hidden md:block" aria-labelledby="header-navigation">
						<h2 className="sr-only" id="header-navigation">Header navigation</h2>

						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a className="text-white transition hover:text-white/75" href="/">
									Services
								</a>
							</li>

							<li>
								<a className="text-white transition hover:text-white/75" href="/">
									Projects
								</a>
							</li>

							<li>
								<a className="text-white transition hover:text-white/75" href="/">
									Blog
								</a>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<button
							className="block p-2.5 text-white bg-gray-800 rounded md:hidden hover:text-white/75 transition"
						>
							<span className="sr-only">Toggle menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
