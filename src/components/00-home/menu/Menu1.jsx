import React from "react";
import { Link } from "react-router-dom";

const Menu1 = () => {
	return (
		<nav>
			<ul>
				<li>
                    <Link to="/hello-world">Home</Link>
                </li>
				<li><Link to="/image">Image</Link></li>
				<li><Link to ="/bootstrap">Bootstrap</Link></li>
				<li>useEffect</li>

			</ul>
		</nav>
	);
};

export default Menu1;
