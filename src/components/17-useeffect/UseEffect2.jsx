import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const UseEffect2 = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		document.title = `Hello ${counter}`;
	}, [counter]);

	return (
		<Container className="text-center  mt-5  bg-dark p-5 ">
			<h1 className="text-danger">{counter} kere tiklandi</h1>
			<Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
				Click Me
			</Button>
		</Container>
	);
};

export default UseEffect2;
