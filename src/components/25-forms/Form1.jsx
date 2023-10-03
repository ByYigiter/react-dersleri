import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
	const [name, setname] = useState("");
	return (
		<Container>
			<Form>
				<h1>Merhaba {name}</h1>
				<Form.Control
					type="text"
					placeholder="Normal text"
					onChange={(e) => setname(e.target.value)}
					value={name}
				/>
			</Form>
		</Container>
	);
};

export default Form1;
