import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NoteForm from "./noteForm";
import Notes from "./notes";

const ToDoApp = () => {
	const [counter, setCounter] = useState(0);
	const [formData, setformData] = useState({
		id: counter,
		text: "",
		isDone: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("https://648c69378620b8bae7ecdc4a.mockapi.io/login", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		setCounter((prev) => prev + 1);
		console.log(formData);
	};

	const handleChange = (e) => {
		setformData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<Container className="d-flex border border-danger">
			<NoteForm handleSubmit={handleSubmit} handleChange={handleChange}/>

			<Notes formData />
		</Container>
	);
};

export default ToDoApp;
