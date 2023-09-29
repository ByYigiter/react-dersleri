import React from "react";
import products from "./products.json";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = () => {
	return (
		//  kenarlara bosşlukarl almak için fluid kullanılır Container fluid
		<Container>
			<Row className="g-5 mt-5">
				{products.map((product, index) => (
					<Col key={product.id} md={6} lg={4} xl={3}>
						<Product {...product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductList;
