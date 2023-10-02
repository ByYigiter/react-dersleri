import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadData = async () => {
		const resp = await axios.get("https://restcountries.com/v3.1/all");
		const arr = resp.data.sort((a, b) =>
			a.name.common.localeCompare(b.name.common)
		);
		setCountries(arr);
		console.log(arr);
		console.log(Object.values(arr[0].currencies)[0].symbol);
	};

	useEffect(() => {
		//useeffectin bu modeli sadece component ilk yuklendigindiginde bir kere calisir,re-render larda calismaz, boylece load data 1 kere calisir
		//useEffecct asenkron oldugu icin her zaman returnden sonra calisir
		loadData();
	}, []);

	return (
		<Table className="fs-2" striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>Bayrak</th>
					<th>Ulke</th>
					<th>Baskent</th>
					<th>Para Birimi</th>
				</tr>
			</thead>
			<tbody>
				{countries.map((country, index) => (
					<tr key={index}>
						<td>{country.region}</td>
						<td>
							<img src={country.flags.png} alt="" />
						</td>
						<td>{country.name.common}</td>
						<td>{country.capital?.join("-")}</td>
						<td>
							{country.currencies &&
								Object.values(country.currencies)[0].symbol +
									"-" +
									Object.values(country.currencies)[0].name}
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Countries;
