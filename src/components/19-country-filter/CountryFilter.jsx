import React, { useEffect, useState } from "react";
import data from "./countries.json";
import { Form, Table } from "react-bootstrap";

const CountryFilter = () => {
	const [countries, setCountries] = useState(data);
	const [searchText, setsearchText] = useState("");

	useEffect(() => {
		const arr = data.filter((item) =>
			item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
		);
		setCountries(arr);
	}, [searchText]);

	return (
		<div className="p-5 bg-success">
			<Form.Control
				type="text"
				placeholder="Type Something"
				className="mb-5"
				onChange={(e) => setsearchText(e.target.value)}
			/>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Country Code</th>
						<th>Country Name</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((item, index) => (
						<tr key={item.code}>
							<td>{index + 1}</td>
							<td>{item.code}</td>
							<td>{item.name}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default CountryFilter;
