import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form4 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});
	console.log(formData);

	const handleFormData = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<Container className="mt-5">
			<Form>
				<Form.Group>
					<Form.Label>Firstname</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						placeholder="Firstname"
						onChange={(e) => handleFormData(e)}
						value={formData.firstName}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Lastname</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						placeholder="Lastname"
						onChange={(e) => handleFormData(e)}
						value={formData.lastName}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="email"
						placeholder="Email"
						onChange={(e) => handleFormData(e)}
						value={formData.email}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Phone</Form.Label>
					<Form.Control
						name="phone"
						type="text"
						placeholder="Phone"
						onChange={(e) => handleFormData(e)}
						value={formData.phone}
					/>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default Form4;
