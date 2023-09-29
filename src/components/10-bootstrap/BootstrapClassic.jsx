import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import project_image from '../../assets/img/resim1.png'

const BootstrapClassic = () => {
	return (
		<div>
			<Row xs={1} md={3} lg={4} className="g-4">
				{Array.from({ length: 4 }).map((_, idx) => (
					<Col key={idx}>
						<Card>
							<Card.Img variant="top" src={project_image} />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
                                <Button variant="primary">Go somewhere</Button>

							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default BootstrapClassic;
