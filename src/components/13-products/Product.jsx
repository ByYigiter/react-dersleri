import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (props) => {
	const { image, desc, title, price } = props;
	const addToCard = () => {
		alert("The card Added");
	};
	return (
		<Card className="h-100">
			<Card.Img variant="top" src={require(`./image/${image}`)} />
			<Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
				<Card.Title className="fs-2">{title}</Card.Title>
				<Card.Subtitle>{desc}</Card.Subtitle>
				<Card.Text className="fs-3 text-info">
					<strong>${price}</strong>{" "}
				</Card.Text>
				<Button variant="primary" onClick={addToCard}>
					Add To Card
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
