import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const UseRef = () => {
	const emailRef = useRef(null);

    // useref ile hangi element ile ilişkillendirirsek o elemente erişilebilir  
	const setFocus = () => {
		console.log(emailRef);
		emailRef.current.focus();
		emailRef.current.style.backgroundColor = "#85f485";
	};

	return (
		<Container className="mt-5">
			<input type="text" placeholder="Enter your email" ref={emailRef} />
			<button onClick={setFocus}>Set Focus</button>
		</Container>
	);
};

export default UseRef;
