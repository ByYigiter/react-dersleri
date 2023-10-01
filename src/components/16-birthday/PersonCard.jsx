import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const PersonCard = ({ image, name, age, id, deletePerson }) => {
	return (
		<Card className="mb-4 position-relative">
			<Row>
				
				<Col md={10}>
					<Card.Body>
						<Card.Title className="fs-1">{name}</Card.Title>
						<Card.Subtitle className="fs-3">{age}</Card.Subtitle>
					</Card.Body>
				</Col>
                <Col md={2}>
					<Card.Img src={require(`./img/${image}`)}></Card.Img>
				</Col>
			</Row>
			<span
				className="position-absolute start-0 bottom-0 text-danger ms-2 mb-2"
				onClick={() => deletePerson(id)}
			>
				<FaTrash />
			</span>
		</Card>
	);
};

export default PersonCard;
