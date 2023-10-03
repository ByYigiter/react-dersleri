import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form3 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});
	console.log(formData);
	return (
		<Container className="mt-5">
			<Form>
				<Form.Group>
					<Form.Label>Firstname</Form.Label>
					<Form.Control
						type="text"
						placeholder="Firstname"
						onChange={(e) =>
							setFormData({ ...formData, firstName: e.target.value })
						}
						value={formData.firstName}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Lastname</Form.Label>
					<Form.Control
						type="text"
						placeholder="Lastname"
						onChange={(e) =>
							setFormData({ ...formData, lastName: e.target.value })
						}
						value={formData.lastName}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						value={formData.email}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="text"
						placeholder="Phone"
						onChange={(e) =>
							setFormData({ ...formData, phone: e.target.value })
						}
						value={formData.phone}
					/>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default Form3;
