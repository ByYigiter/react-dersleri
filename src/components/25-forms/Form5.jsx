import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {
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
	const handleSubmit = (e) => {
		// alert("Recep")
		e.preventDefault();
		try {
			if (!formData.firstName) throw new Error("adinizi giriniz");
			if (!formData.lastName) throw new Error("soyadinizi giriniz");
			if (!formData.email) throw new Error("email giriniz");
			if (!formData.phone) throw new Error("phone giriniz");

			setTimeout(() => {
				alert("Bilgileriniz gonderildi");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
				});
			}, 1000);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container className="mt-5">
			{/*  **** unutma method cağirma yaparken () kullanırsan otomatik cağırma yapar..  no validate yaparsak kendi validation ımız kullanılır  */}
			<Form method="post" onSubmit={handleSubmit} noValidate>
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
				<Form.Group className="mb-4">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						name="phone"
						type="text"
						placeholder="Phone"
						onChange={(e) => handleFormData(e)}
						value={formData.phone}
					/>
				</Form.Group>
				<Button variant="info" type="submit">
					Kaydet
				</Button>
			</Form>
		</Container>
	);
};

export default Form5;
