import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import project_image from "../../assets/img/resim1.png";

const BootstrapDynamic = () => {
	return (
		<div>
			<Row>
            <Col xs={6} md={4}>
					xs=6 md=4
				</Col>
				<Col xs={12} md={8}>
					xs=12 md=8
				</Col>
				
			</Row>

			<Carousel data-bs-theme="dark">
				<Carousel.Item>
					<img className="d-block w-50" src={project_image} alt="First slide" />
					<Carousel.Caption>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-50"
						src={project_image}
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-50" src={project_image} alt="Third slide" />
					<Carousel.Caption>
						<h5>Third slide label</h5>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default BootstrapDynamic;
