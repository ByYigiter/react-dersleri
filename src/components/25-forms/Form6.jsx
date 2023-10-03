import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const Form6 = () => {
	const initialValues = {
		email: "",
		password: "",
		remember: false,
	};
	const validationSchema = Yup.object({
		email: Yup.string().email("Gecerli eposta gir").required("Eposta giriniz"),
		password: Yup.string().required("Gecerli 8 password gir"),
	});
	const onSubmit = async (values) => {
		try {
			const resp = await axios.post(
				"https://order-management-backend-v2-31145d4c4df1.herokuapp.com/login",
				values
			);
			console.log(resp.data);
            localStorage.setItem("token",resp.data.token)
		} catch (err) {
			console.log(err);
			alert(err.resp.data.message);
		}
	};
	const formik = useFormik({
        // bu şekilde de olur
		initialValues:initialValues, 
		validationSchema,
		onSubmit,
	});

	return (
		<Container className="mt-5">
			<Form noValidate onSubmit={formik.handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						{...formik.getFieldProps("email")}
						isInvalid={formik.touched.email && !!formik.errors.email}
						isValid={formik.touched.email && !formik.errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.email}
					</Form.Control.Feedback>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						{...formik.getFieldProps("password")}
						isInvalid={formik.touched.password && !!formik.errors.password}
						isValid={formik.touched.password && !formik.errors.password}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.password}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						label="Check me out"
						{...formik.getFieldProps("remember")}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Form6;
