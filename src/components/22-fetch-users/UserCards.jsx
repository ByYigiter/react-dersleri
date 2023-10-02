import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./UserCard.jsx";

const UserCards = () => {
	const [users, setusers] = useState([]);
	const [loading, setLoading] = useState(true);

    // **** fetch asenkron calışır ve setUsers setleme yapıldıktan sonra tekrar render olur tekrar fetch  calışır tekrar aynı doner o yuzden useEffect kullanmak zorundayız
	useEffect(() => {
		setTimeout(() => {
			fetch("https://651a83c0340309952f0d7157.mockapi.io/users") //fetch in default methodu get tir,yazmaya gerek yok,farkli birsey kullanacakasak put,post vs  o zaman yazmaliyiz
				.then((resp) => resp.json())
				.then((data) => {
					setusers(data);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
				});
		}, 4000);
	}, []);

	return (
		<Container className="mt-5">
			{loading && <Spinner animation="border" variant="primary" />}
			<Row className="g-4">
				{users.map((user) => (
					<Col key={user.id} sm={6} md={4} lg={3} xl={2}>
						<UserCard {...user} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default UserCards;
