import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
	const refAboutUs = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const aboutUsEl = refAboutUs.current;
			const currentScrollPosition = window.scrollY;

			const elScrollPosition = aboutUsEl.offsetTop;
			const currentWindowHeight = window.innerHeight;
			const elCurrentHeight = aboutUsEl.offsetHeight;

			const targetScrollPosition =
				elScrollPosition - currentWindowHeight + elCurrentHeight;

			if (currentScrollPosition >= targetScrollPosition) {
				aboutUsEl.classList.add("active");
			}
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Container>
			{[...new Array(15)].map((item, index) => (
				<p key={index}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae
					nesciunt officia sequi corporis perferendis nam, asperiores, tempore
					voluptatum suscipit at dolor consectetur deleniti illo rerum
					voluptates fugiat blanditiis ad! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Soluta beatae nesciunt officia sequi
					corporis perferendis nam, asperiores, tempore voluptatum suscipit at
					dolor consectetur deleniti illo rerum voluptates fugiat blanditiis ad!
				</p>
			))}

			<p className="about-us" ref={refAboutUs}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				minus id in nam inventore. Amet laudantium aspernatur consectetur
				asperiores, molestias vel alias tempora itaque dolorem laboriosam ab aut
				veritatis corporis.
			</p>

			{[...new Array(15)].map((item, index) => (
				<p key={index}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae
					nesciunt officia sequi corporis perferendis nam, asperiores, tempore
					voluptatum suscipit at dolor consectetur deleniti illo rerum
					voluptates fugiat blanditiis ad!
				</p>
			))}
		</Container>
	);
};

export default Scroll;
