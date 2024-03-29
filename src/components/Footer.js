import React, { Fragment } from 'react';

import './css/footer.css';

function Footer() {
	return (
		<Fragment>
		<footer>
			<div className="footerItem">
				<div className="footerItemHeading">
					GitHub
				</div>
				<div className="footerItemData">
					<ul>
						<li><a href="https://github.com/Yasser-Massoud">Yasser-Massoud</a></li>
						<li><a href="https://github.com/Yasser-Massoud/story-stack">Story Stack Project Repo</a></li>
					</ul>
				</div>
			</div>
			<div className="footerItem">
				<div className="footerItemHeading">
					Thanks
				</div>
				<div className="footerItemData">
					Thanks to RBK and Community members who Helps me a lot to learn new technology and help me build my projects, and thanks to Hacker News for awesome free API.
				</div>
			</div>
			<div className="footerItem">
				<div className="footerItemHeading">
					Contact Me
				</div>
				<div className="footerItemData">
					You can contact me at : <br />
					<ul>
						<li><a href="https://www.instagram.com/y_e_s_e_r/?hl=en">Instagram</a></li>
						
						<li><a href="www.google.com">yassermassoud000@gmail.com</a></li>
					</ul>
				</div>
			</div>
		</footer>
		
		</Fragment>
	)
}

export default Footer;