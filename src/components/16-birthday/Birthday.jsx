import React, { useState } from "react";
import data from "./people.json";
import { Button, Container } from "react-bootstrap";
import PersonCard from "./PersonCard";

const Birthday = () => {
	const [people, setPeople] = useState(data);
	const deletePerson = (id) => {
		const arr = people.filter((person) => person.id !== id);
		setPeople(arr);
	};
	return (
		<Container>
			<h1>Bugun Doganlar</h1>
			<p>Bugun dogan {people.length} kisi bulundu</p>
			{people.map((item) => (
				<PersonCard {...item} key={item.id} deletePerson={deletePerson} />
			))}
			<Button variant="danger" onClick={() => setPeople([])} style={{marginRight:"2rem"}} >
				Remove All
			</Button>
			<Button variant="success" onClick={() => setPeople(data)}>
				Reload Data
			</Button>
		</Container>
	);
};

export default Birthday;
