import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {
	const [name1, setname1] = useState("");
	const [name2, setname2] = useState("");
	const [name3, setname3] = useState(0);

	useEffect(() => {
		setname3(Number(name1) + Number(name2));
		// if (name1 === 0) {
		// 	setname1("");
		// }
		// if (name2 === 0) {
		// 	setname2("");
		// }
	}, [name1, name2]);
	return (
		<Container className="mt-5">
			<Form >
				<Form.Group className="mb-3" >
					<Form.Control
						type="number"
						placeholder="1.sayi"
						onChange={(e) => setname1(e.target.value)}
						value={name1}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						placeholder="2.sayi"
						onChange={(e) => setname2(e.target.value)}
						value={name2}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						placeholder="3.Sayi"
						value={name3}
						disabled
					/>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default Form2;
